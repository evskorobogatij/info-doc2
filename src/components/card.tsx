import { DocumentEditIcon } from '@icons/document_edit_icon'
import { TrashIcon } from '@icons/trash_icon'
import { $logged } from '@models/auth'
import { DocViewPage } from '@pages/doc_view'
import { useStore } from 'effector-react'
import { useDocumentDlg } from './document_dlg'
import { useRemoveDlg } from './remove_dlg'

interface CardProps {
  id: string
  title: string
  fileId: string
}

export const Card = ({ id, title, fileId }: CardProps) => {
  const logged = useStore($logged)

  const { Dialog: EditDocumentDlg, open: openDocumentDlg } = useDocumentDlg({
    documentUid: id
  })
  const { Dialog: RemoveDialog, open: openRemoveDialog } = useRemoveDlg({
    id,
    title
  })

  const removeHandle = () => {
    openRemoveDialog()
  }

  const openDocument = () => {
    DocViewPage.route.open({ fileid: fileId })
  }

  return (
    <div className="break-inside-avoid card bg-base-100 shadow-md mb-8 border hover:border-blue-600 hover:shadow-blue-500">
      <div className="card-body">
        <p className="font-normal text-base">{title}</p>
        <div className="card-actions justify-between">
          <div className="flex gap-2">
            {logged && (
              <>
                <RemoveDialog />
                <button
                  className="btn btn-circle btn-ghost hover:text-red-600 hover:bg-red-100"
                  onClick={removeHandle}
                >
                  <TrashIcon />
                </button>

                <EditDocumentDlg />
                <button
                  className="btn btn-circle btn-ghost hover:text-blue-600 hover:bg-blue-100"
                  onClick={openDocumentDlg}
                >
                  <DocumentEditIcon />
                </button>
              </>
            )}
          </div>
          <button className="btn btn-link text-blue-600" onClick={openDocument}>
            Читать →
          </button>
        </div>
      </div>
    </div>
  )
}
