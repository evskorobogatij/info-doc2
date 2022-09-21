import { DocumentIcon } from '@icons/document_icon'
import { UploadIcon } from '@icons/upload_icon'
import {
  $document,
  $documentTitle,
  $fileUploading,
  $filledDocument,
  $uploadedMetadata,
  DocumentGate,
  setDocumentTitle,
  setUploadFile
} from '@models/document'
import { saveEditedDocumentFx, saveNewDocumentFx } from '@models/files'
import clsx from 'clsx'
import { useGate, useStore } from 'effector-react'
import { ChangeEvent, useRef, useState } from 'react'
import { UploadDocIndicator } from './upload_doc_incicator'

interface DocumentDialogContentProps {
  fileUid?: string | null
}

export const DocumentDialogContent = ({
  fileUid = null
}: DocumentDialogContentProps) => {
  // const [title, setTilte] = useState('')
  const title = useStore($documentTitle)
  const fileUploading = useStore($fileUploading)
  const uploadedMetadata = useStore($uploadedMetadata)

  const filledDocument = useStore($filledDocument)

  const { id: docId } = useStore($document)

  const [dragFileOver, setDragFileOver] = useState(false)
  const [fileInFocus, setFileInFocus] = useState(false)

  const fileHandler = useRef<HTMLInputElement>(null)

  const clickOnFileZoneHandler = () => {
    fileHandler.current?.click()
  }

  const fileSelectHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files && files.length > 0) {
      const file = files.item(0)

      if (file) {
        if (file.type === 'application/pdf') setUploadFile(file)
      }
    }
  }

  const saveDocumentsHandle = () => {
    if (uploadedMetadata?.id && !fileUid)
      saveNewDocumentFx({ title, uploadedFileId: uploadedMetadata.id })
    if (uploadedMetadata?.id && fileUid && docId)
      saveEditedDocumentFx({
        id: docId,
        title,
        uploadedFileId: uploadedMetadata.id
      })
  }

  useGate(DocumentGate, fileUid)

  return (
    <>
      <h3 className="font-bold text-xl">
        {docId ? 'Редактирование свойств документа' : 'Добавление документа'}
      </h3>
      <p />
      <p className="font-normal text-lg my-2">
        Укажите наименование документа и прикрепите файл
      </p>
      <form className="w-full ">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="mb-4 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Наименование документа
          </label>
          <textarea
            // type="text"
            id="title"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Наименование документа"
            required
            value={title}
            onChange={(e) => setDocumentTitle(e.target.value)}
          />
        </div>

        <div
          className={clsx(
            'mb-4 h-40 border border-gray-300 rounded-lg  flex justify-center  items-center cursor-pointer relative',
            fileInFocus && 'ring-2 ring-offset-1 ring-blue-600',
            dragFileOver ? 'bg-gray-400' : 'bg-gray-50'
          )}
          onClick={clickOnFileZoneHandler}
        >
          {uploadedMetadata === null && !fileUploading && (
            <div className="flex flex-col items-center gap-2">
              <UploadIcon />
              <div className="text-sm">
                {dragFileOver
                  ? 'Отпустите для загрузки файла в систему'
                  : 'Перетащите сюда нужный файл или нажмите для добавления'}
              </div>
            </div>
          )}

          {fileUploading && (
            <div className="flex flex-row items-center gap-2">
              <UploadDocIndicator />
              <div>Загрузка документа</div>
            </div>
          )}

          {uploadedMetadata && (
            <div className="flex flex-row items-center gap-2">
              <DocumentIcon />
              <div className="flex flex-col">
                <div>{uploadedMetadata.original}</div>
                <div>{uploadedMetadata.size}</div>
              </div>
            </div>
          )}

          <input
            type={'file'}
            ref={fileHandler}
            onChange={fileSelectHandle}
            onDragOver={() => setDragFileOver(true)}
            onDragLeave={() => setDragFileOver(false)}
            onDrop={() => setDragFileOver(false)}
            onBlur={() => setFileInFocus(false)}
            onFocus={() => setFileInFocus(true)}
            disabled={fileUploading}
            accept={'application/pdf'}
            className={
              'left-0 right-0 top-0 bottom-0 absolute opacity-0 w-full'
            }
          />
        </div>
      </form>

      <div className="modal-action">
        <button
          className={clsx('btn btn-primary', !filledDocument && 'btn-disabled')}
          onClick={saveDocumentsHandle}
        >
          Сохранить
        </button>
      </div>
    </>
  )
}
