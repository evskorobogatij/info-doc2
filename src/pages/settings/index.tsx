import { DocumentsList } from '@components/documents_list'
import { createRoute } from 'atomic-router'
import { LogoutIcon } from '@icons/log_out_icon'
import { $userName, redirectToLoginFx, SecureGate } from '@models/auth'
import { useGate, useStore } from 'effector-react'

const route = createRoute()

const Page = () => {
  const userName = useStore($userName)
  const handleLogout = () => {
    redirectToLoginFx({})
  }
  useGate(SecureGate)
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-4">
        <div className="w-full h-14 flex items-center bg-blue-600 text-slate-200 px-4 justify-between">
          <div className="text-xl  font-bold">Настройка</div>
          <div className="flex flex-row gap-4">
            <div className="avatar placeholder items-center">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8 h-8">
                <span>{userName.at(0)?.toUpperCase()}</span>
              </div>
            </div>
            <button className="btn btn-ghost" onClick={handleLogout}>
              <LogoutIcon />
            </button>
          </div>
        </div>
        <DocumentsList />
      </div>
    </>
  )
}

export const SettingsPage = { route, Page }
