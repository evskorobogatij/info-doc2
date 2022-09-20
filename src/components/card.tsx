import { TrashIcon } from '@icons/trash_icon'
import { $logged } from '@models/auth'
import { useStore } from 'effector-react'
import { useRemoveDlg } from './remove_dlg'

interface CardProps {
  id: string
  title: string
}

export const Card = ({ id, title }: CardProps) => {
  const logged = useStore($logged)

  const { Dialog: RemoveDialog, open: openRemoveDialog } = useRemoveDlg({
    id,
    title
  })

  const removeHandle = () => {
    openRemoveDialog()
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
                  className="btn btn-circle btn-ghost hover:text-blue-600 hover:bg-blue-100"
                  onClick={removeHandle}
                >
                  <TrashIcon />
                </button>
              </>
            )}
          </div>
          <button className="btn btn-link text-blue-600">Читать →</button>
        </div>
      </div>
    </div>
  )
}
