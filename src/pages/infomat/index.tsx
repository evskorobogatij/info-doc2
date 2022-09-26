import { DocumentBox } from '@components/DocumentBox'
import { FmbaContainer } from '@components/fmba_container'
import { HeaderBlock } from '@components/header_block'
import { $infomat, $viewMode } from '@models/infomat'
import { $isOnline } from '@models/sys'
import { createRoute } from 'atomic-router'
import { sample } from 'effector'
import { useStore } from 'effector-react'

const route = createRoute<{ infomat: number }>()

sample({
  clock: route.opened,
  fn: ({ params }) => params.infomat,
  target: $infomat
})

const Infomat = () => {
  const mode = useStore($viewMode)

  const infomat = useStore($infomat)

  const isOnline = useStore($isOnline)

  return (
    <div className="w-screen h-screen flex flex-col">
      {isOnline ? (
        <>
          <HeaderBlock />
          {mode === 'documents' ? (
            <DocumentBox />
          ) : (
            <FmbaContainer infomat={infomat} />
          )}
        </>
      ) : (
        <>
          <div className="flex w-screen h-screen justify-center items-center bg-blue-600">
            <div className="text-5xl text-white font-bold uppercase">Нет сети</div>
          </div>
        </>
      )}
    </div>
  )
}

export const InfomatPage = { route, Infomat }
