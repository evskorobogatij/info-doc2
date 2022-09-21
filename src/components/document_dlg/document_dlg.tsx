import { CloseIcon } from '@icons/close_icon'
import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { DocumentDialogContent } from './document_diallog_content'

interface DocumentDlgProps {
  documentUid?: string|null
}


export const useDocumentDlg = ({
  documentUid = null
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
          >
            <div className="modal-box relative scale-100">
              <label
                className="btn btn-circle btn-sm absolute right-2 top-2 btn-primary btn-outline"
                onClick={close}
              >
                <CloseIcon />
              </label>
              
              <DocumentDialogContent fileUid={documentUid} />
            </div>
          </div>
        )}
      </>
    ),
    [close, documentUid, isOpen]
  )

  return {
    Dialog,
    open
  }
}
