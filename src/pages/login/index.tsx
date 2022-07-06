import { createRoute } from 'atomic-router'

const route = createRoute()

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      login
    </div>
  )
}

export const LoginPage = {
  route,
  Login
}
