import { useStore } from 'effector-react'
import {
  $viewMode,
  selectDocumentMode,
  selectRecordMode
} from '@models/infomat'
import clsx from 'clsx'

export const HeaderBlock = () => {
  const mode = useStore($viewMode)
  return (
    <div className="absolute right-0 flex flex-col justify-center items-end bg-transparent h-screen gap-4 z-50 w-36">
      {/* <div className="flex gap-4 bg-white rounded-b-lg h-full p-2">
        <button className="btn btn-primary btn-sm">Запись к врачу</button>
        <button className="btn btn-ghost btn-sm">Документы</button>
      </div> */}
      <div
        className={clsx(
          'btn rounded-l-lg rounded-r-none w-36',
          mode === 'record' ? 'btn-primary ' : 'btn-outline btn-ghost bg-white'
        )}
        onClick={() => selectRecordMode()}
      >
        Запись к врачу
      </div>
      <div
        className={clsx(
          'btn rounded-l-lg rounded-r-none w-36',
          mode === 'documents'
            ? 'btn-primary '
            : 'btn-outline btn-ghost bg-white'
        )}
        onClick={() => selectDocumentMode()}
      >
        Документы
      </div>
    </div>
  )
}
