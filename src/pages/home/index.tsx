import { createRoute } from 'atomic-router'

const route = createRoute()

const Page = () => (
  <div className="flex w-screen h-screen justify-center items-center bg-blue-600">
    <div className="text-5xl text-white font-bold">Инфомат не наcтроен</div>
  </div>
)

export const HomePage = {
  route,
  Page
}
