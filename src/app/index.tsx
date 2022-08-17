import { HomePage } from '@pages/home'
import { InfomatPage } from '@pages/infomat'
import { InfomatsPage } from '@pages/infomats'
import { LoginPage } from '@pages/login'
import { SettingsPage } from '@pages/settings'
import { Route, RouterProvider } from 'atomic-router-react'
import { router } from './routing'

export const App = () => (
  <RouterProvider router={router}>
    <Route route={InfomatsPage.route} view={InfomatsPage.Infomats} />
    <Route route={InfomatPage.route} view={InfomatPage.Infomat} />    
    <Route route={LoginPage.route} view={LoginPage.Login} />
    <Route route={SettingsPage.route} view={SettingsPage.Page} />
    <Route route={HomePage.route} view={HomePage.Page} />
  </RouterProvider>
)
