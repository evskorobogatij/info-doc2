import { DocumentsList } from '@components/documents_list'
import { createRoute } from 'atomic-router'
import { LogoutIcon } from '@icons/log_out_icon'

const route = createRoute()

const Page = () => {
  const handleLogout = () => {
    //
  }
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-4">
        <div className="w-full h-14 flex items-center bg-blue-600 text-slate-200 px-4 justify-between">
          <div className="text-xl  font-bold">Настройка</div>
          <button className="btn btn-ghost" onClick={handleLogout}>
            <LogoutIcon />
          </button>
        </div>
        <DocumentsList />
      </div>
    </>
  )
}

export const SettingsPage = { route, Page }
