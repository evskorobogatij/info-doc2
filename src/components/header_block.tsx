import { useStore } from 'effector-react'
import {
  $viewMode,
  selectDocumentMode,
  selectRecordMode,
} from '../models/infomat'

export const HeaderBlock = () => {
  const mode = useStore($viewMode)
  return (
    <div className="absolute top-0 flex justify-center bg-transparent w-screen gap-4 z-50">
      {/* <div className="flex gap-4 bg-white rounded-b-lg h-full p-2">
        <button className="btn btn-primary btn-sm">Запись к врачу</button>
        <button className="btn btn-ghost btn-sm">Документы</button>
      </div> */}
      <div
        className={
          mode === 'record'
            ? 'btn btn-primary rounded-b-lg rounded-t-none'
            : 'btn btn-outline btn-ghost bg-white rounded-b-lg rounded-t-none'
        }
        onClick={() => selectRecordMode()}
      >
        Запись к врачу
      </div>
      <div
        className={
          mode === 'documents'
            ? 'btn btn-primary rounded-b-lg rounded-t-none'
            : 'btn btn-outline btn-ghost bg-white rounded-b-lg rounded-t-none'
        }
        onClick={() => selectDocumentMode()}
      >
        Документы
      </div>
    </div>
  )
}
