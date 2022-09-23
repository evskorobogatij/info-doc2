import { DocViewPage } from '@pages/doc_view'
import { HomePage } from '@pages/home'
import { InfomatPage } from '@pages/infomat'
import { InfomatsPage } from '@pages/infomats'
import { LoginPage } from '@pages/login'
import { SettingsPage } from '@pages/settings'
import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory } from 'history'

export const routes = [
  { path: '/login', route: LoginPage.route },
  { path: '/infomat', route: InfomatsPage.route },
  { path: '/infomat/:infomat', route: InfomatPage.route },
  { path: '/document/:fileid', route: DocViewPage.route },
  { path: '/settings', route: SettingsPage.route },
  { path: '/', route: HomePage.route }
]

export const history = createBrowserHistory()

export const router = createHistoryRouter({
  routes
})

router.setHistory(history)
