import { HomePage } from '@pages/home'
import { InfomatPage } from '@pages/infomat'
import { InfomatsPage } from '@pages/infomats'
import { LoginPage } from '@pages/login'
import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory } from 'history'

export const routes = [
  { path: '/login', route: LoginPage.route },
  { path: '/infomat', route: InfomatsPage.route },
  { path: '/infomat/:infomat', route: InfomatPage.route },
  { path: '/', route: HomePage.route }
]

export const history = createBrowserHistory()

export const router = createHistoryRouter({
  routes
})

router.setHistory(history)
