import {
  $authError,
  $isAuthChecking,
  $isLoginError,
  $logged,
  loginFx
} from '@models/auth'
import { SettingsPage } from '@pages/settings'
import { createRoute } from 'atomic-router'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'

const route = createRoute()

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const isLoginError = useStore($isLoginError)
  const checking = useStore($isAuthChecking)
  const logged = useStore($logged)

  const handleCheckLogin = () => {
    if (username && password) {
      loginFx({ username, password })
    }
  }

  useEffect(() => {
    if (logged) {
      console.log('Вход выполнен')
      SettingsPage.route.open({})
    }
  }, [logged])

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-96">
        <div className="justify-center text-center text-5xl font-bold text-blue-600">
          Вход
        </div>
        <div className="text-center text-lg font-light my-8">
          Настройка инфоматов
        </div>
        {isLoginError && (
          <div className="alert alert-error shadow-lg my-4 text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{'Ошибка авторизации пользователя'}</span>
            </div>
          </div>
        )}

        <form className="w-full ">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Имя пользователя
            </label>
            <input
              type="text"
              id="name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Имя пользователя"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Пароль
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Пароль"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="items-center flex justify-items-center justify-center">
          <button
            className={clsx(
              checking && 'loading',
              'btn bg-blue-600 hover:bg-blue-700 w-60'
            )}
            onClick={handleCheckLogin}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  )
}

export const LoginPage = {
  route,
  Login
}
