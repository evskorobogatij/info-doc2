import { Auth } from '@services/Auth'
import { client } from '@services/client'
import { AuthInfo } from '@services/data-contracts'
import { combine, createEffect, createStore, restore } from 'effector'
import { createGate } from 'effector-react'

const authApi = new Auth(client)

export const $userName = createStore<string>('')
export const $logged = createStore(false)
export const $unlogged = $logged.map((state) => !state)

export const $accessToken = createStore<string>('')
export const loginFx = createEffect(
  async ({ username, password }: AuthInfo) => {
    const res = await authApi.login({ username, password })
    if (res.ok) {
      return res.data.access_token
    } else {
      throw new Error('Ошибка авторизации пользователя')
    }
  }
)

export const storeTokenFx = createEffect((tocken: string) => {
  client.setSecurityData(tocken)
})

export const clearSecurityTokenFx = createEffect(()=>{
  client.setSecurityData('')
})

export const $authError = restore(loginFx.failData, null)
export const $isAuthChecking = loginFx.pending.map((pending) => pending)

export const $isLoginError = createStore(false)

export const redirectToLoginFx = createEffect()

export const SecureGate = createGate()

export const $authInfo = combine({$userName,$logged,$unlogged,$accessToken,$authError})