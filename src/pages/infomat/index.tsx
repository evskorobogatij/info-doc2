import { DocumentBox } from '@components/DocumentBox'
import { FmbaContainer } from '@components/fmba_container'
import { HeaderBlock } from '@components/header_block'
import { $infomat, $viewMode } from '@models/infomat'
import { createRoute } from 'atomic-router'
import { sample } from 'effector'
import { useStore } from 'effector-react'

const route = createRoute<{infomat:number}>()

sample({
  clock: route.opened,
  fn: ({params}) => params.infomat,
  target: $infomat
})

const Infomat = () => {
  const mode = useStore($viewMode)

  const infomat = useStore($infomat)

  return (
    <div className="w-screen h-screen flex flex-col">
      <HeaderBlock />
      {mode === 'documents' ? (
        <DocumentBox />
      ) : (
        <FmbaContainer infomat={infomat} />
      )}
    </div>
  )
}


export const InfomatPage = { route, Infomat}