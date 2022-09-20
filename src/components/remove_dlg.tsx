import { removeDocumentFx } from '@models/files'
import clsx from 'clsx'
import { useCallback, useState } from 'react'

interface RemoveDlgProps {
  id: string
  title: string
}
export const useRemoveDlg = ({ id, title }: RemoveDlgProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => {
    setIsOpen(true)
  }
  const close = useCallback(() => {
    console.log('Try close')
    setIsOpen(false)
  }, [])

  const remove = useCallback(async () => {
    await removeDocumentFx(id)
    close()
  }, [close, id])

  const Dialog = useCallback(
    () => (
      <div
        className={clsx(
          'modal',
          isOpen && 'visible opacity-100 pointer-events-auto'
        )}
      >
        <div className="modal-box relative scale-100">
          {/* <label
                className="btn btn-circle btn-sm absolute right-2 top-2 btn-primary btn-outline"
                onClick={close}
              >
                <CloseIcon />
              </label> */}
          <h3 className="font-bold text-xl">Удаление документа</h3>
          <p className="font-normal text-lg my-2">
            {`Вы действительно хотите удалить документ "${title}"`}
          </p>
          <div className="modal-action">
            <button
              className="btn btn-outline hover:btn-primary"
              onClick={close}
            >
              Отмена
            </button>
            <button className="btn btn-error " onClick={remove}>
              Удалить
            </button>
          </div>
        </div>
      </div>
    ),
    [close, isOpen, remove, title]
  )

  return {
    Dialog,
    open
  }
}
