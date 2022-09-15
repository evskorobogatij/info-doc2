import { LoginPage } from '@pages/login'
import { TokenInfo } from '@services/token_info'
import { sample } from 'effector'
import jwtDecode from 'jwt-decode'
import { $accessToken, $authError, $authInfo, $isLoginError, $logged, $unlogged, $userName, clearSecurityTokenFx, loginFx, redirectToLoginFx, SecureGate, storeTokenFx } from '.'

sample({
  clock: loginFx.doneData,
  target: $accessToken
})

sample({
  source: $accessToken,
  filter: (data) => data.length > 0,
  fn: (token) => {
    return jwtDecode<TokenInfo>(token).username
  },
  target: $userName
})

sample({
  source: $accessToken,
  filter: (data) => data.length > 0,
  target: storeTokenFx
})

sample({
  source: $accessToken,
  filter: (data) => data.length > 0,
  fn: () => null,
  target: $authError
})

sample({
  source: $accessToken,
  filter: (data) => data==='',
  fn: () => '',
  target: $userName
})

sample({
  source: $accessToken,
  filter: (data) => data==='',
  target: clearSecurityTokenFx
})

sample({
  source: $userName,
  fn: (data) => {
    return data.length > 0
  },
  target: $logged
})

sample({
  clock: $authError,
  fn: (data) => Boolean(data),
  target: $isLoginError
})

sample({
  clock: redirectToLoginFx,
  fn: () => ({}),
  target: LoginPage.route.open
})

sample({
  clock: redirectToLoginFx,
  fn: () => '',
  target: $accessToken
})

sample({
  clock: SecureGate.open,
  filter: $unlogged,
  target: redirectToLoginFx
})

$authInfo.watch((state)=>console.log('Auth info ', state))