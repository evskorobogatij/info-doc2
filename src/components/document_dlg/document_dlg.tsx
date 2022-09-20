import { CloseIcon } from '@icons/close_icon'
import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { DocumentDialogContent } from './document_diallog_content'

interface DocumentDlgProps {
  dialogId?: string
}


export const useDocumentDlg = ({
  dialogId = 'document_dlg'
}: DocumentDlgProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => {
    setIsOpen(true)
  }
  const close = useCallback(() => {
    console.log('Try close')
    setIsOpen(false)
  }, [])

  const Dialog = useCallback(
    () => (
      <>
        {isOpen && (
          <div
            className={clsx(
              'modal',
              isOpen && 'visible opacity-100 pointer-events-auto'
            )}
            id={dialogId}
          >
            <div className="modal-box relative scale-100">
              <label
                className="btn btn-circle btn-sm absolute right-2 top-2 btn-primary btn-outline"
                onClick={close}
              >
                <CloseIcon />
              </label>
              
              <DocumentDialogContent />
            </div>
          </div>
        )}
      </>
    ),
    [close, dialogId, isOpen]
  )

  return {
    Dialog,
    open
  }
}
