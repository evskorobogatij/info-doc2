import { goOffline, goOnline } from '@models/sys'
import { DocListViewPage } from '@pages/doclist'
import { DocViewPage } from '@pages/doc_view'
import { HomePage } from '@pages/home'
import { InfomatPage } from '@pages/infomat'
import { InfomatsPage } from '@pages/infomats'
import { LoginPage } from '@pages/login'
import { SettingsPage } from '@pages/settings'
import { Route, RouterProvider } from 'atomic-router-react'
import { useEffect } from 'react'
import { router } from './routing'

const NetObserv = () => {
  const online = () => {
    goOnline()
  }
  const offline = () => {
    goOffline()
  }

  useEffect(() => {
    window.addEventListener('online', online)
    window.addEventListener('offline', offline)
    return () => {
      window.removeEventListener('online', online)
      window.removeEventListener('offline', offline)
    }
  })

  return <div />
}
export const App = () => {
  return (
    <>
      <NetObserv />
      <RouterProvider router={router}>
        <Route route={InfomatsPage.route} view={InfomatsPage.Infomats} />
        <Route route={InfomatPage.route} view={InfomatPage.Infomat} />
        <Route route={LoginPage.route} view={LoginPage.Login} />
        <Route route={SettingsPage.route} view={SettingsPage.Page} />
        <Route route={DocViewPage.route} view={DocViewPage.Page} />
        <Route
          route={DocListViewPage.route}
          view={DocListViewPage.DocListView}
        />
        <Route route={HomePage.route} view={HomePage.Page} />
      </RouterProvider>
    </>
  )
}
