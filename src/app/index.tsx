import { HomePage } from '@pages/home'
import { InfomatPage } from '@pages/infomat'
import { LoginPage } from '@pages/login'
import { Route, RouterProvider } from 'atomic-router-react'
import { router } from './routing'

export const App = () => (
  <RouterProvider router={router}>
    <Route route={InfomatPage.route} view={InfomatPage.Infomat} />
    <Route route={LoginPage.route} view={LoginPage.Login} />
    <Route route={HomePage.route} view={HomePage.Page} />
  </RouterProvider>
)
