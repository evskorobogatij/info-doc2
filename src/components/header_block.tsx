import { useStore } from 'effector-react'
import {
  $viewMode,
  selectDocumentMode,
  selectRecordMode
} from '@models/infomat'
import clsx from 'clsx'
import { DocumentIcon } from '@icons/document_icon'
import { UserIcon } from './user_icon'

export const HeaderBlock = () => {
  const mode = useStore($viewMode)
  return (
    <div className="absolute right-[1px] flex flex-col justify-center items-end bg-transparent h-screen gap-4 z-50">
      {/* <div className="flex gap-4 bg-white rounded-b-lg h-full p-2">
        <button className="btn btn-primary btn-sm">Запись к врачу</button>
        <button className="btn btn-ghost btn-sm">Документы</button>
      </div> */}
      <div
        className={clsx(
          'btn rounded-l-lg rounded-r-none flex-row ',
          mode === 'record'
            ? 'btn-primary '
            : 'btn-square btn-outline btn-ghost bg-white'
        )}
        onClick={() => selectRecordMode()}
      >
        <UserIcon />
        {mode === 'record' && 'Запись к врачу'}
      </div>
      <div
        className={clsx(
          'btn rounded-l-lg rounded-r-none ',
          mode === 'documents'
            ? 'btn-primary'
            : 'btn-square btn-outline btn-ghost bg-white'
        )}
        onClick={() => selectDocumentMode()}
      >
        <DocumentIcon />
        {mode === 'documents' && 'Документы'}
      </div>
    </div>
  )
}
