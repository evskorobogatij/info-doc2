import { DocumentAddIcon } from '@icons/documnt_add_icon'
import { useDocumentDlg } from './document_dlg'

export const DocumentAddBtn = () => {
  const { Dialog, open } = useDocumentDlg({})
  const handleNewDocument = () => {
    open()
  }
  return (
    <>
      <Dialog />
      <div
        className="break-inside-avoid card bg-base-100 shadow-md mb-8 border hover:border-blue-600 hover:shadow-blue-500 h-56 cursor-pointer"
        onClick={handleNewDocument}
      >
        <div className="card-body flex justify-center items-center hover:text-blue-600">
          <DocumentAddIcon />
          <p className="flex-grow-0 font-semibold">Добавить документ</p>

          {/* <label htmlFor="my-modal" className="btn modal-button">
            open modal
          </label>

          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You&#39 ve been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
