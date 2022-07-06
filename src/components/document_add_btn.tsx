import { DocumentAddIcon } from '../icons/documnt_add_icon'

export const DocumentAddBtn = () => (
  <div className="break-inside-avoid card bg-base-100 shadow-md mb-8 border hover:border-blue-600 hover:shadow-blue-500 h-56 cursor-pointer">
    <div className="card-body flex justify-center items-center hover:text-blue-600">
      <DocumentAddIcon />
      <p className="flex-grow-0 font-semibold">Добавить документ</p>
    </div>
  </div>
)
