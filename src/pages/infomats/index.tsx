import { LoaderSpinner } from '@components/loader_spinner'
import {
  $infomats,
  $loadingInfomatList,
  InfomatListGate
} from '@models/infomat'
import { InfomatPage } from '@pages/infomat'
import { createRoute } from 'atomic-router'
import { Link } from 'atomic-router-react'
import { useGate, useList, useStore } from 'effector-react'

const InfomatList = () =>
  useList($infomats, (infomat) => (
    <Link
      to={InfomatPage.route}
      params={{ infomat: infomat.code }}
      key={infomat.id}
      className={'btn btn-outline btn-ghost bg-white hover:btn-primary w-96 '}
    >
      {infomat.name}
    </Link>
  ))

const Infomats = () => {
  const loading = useStore($loadingInfomatList)
  useGate(InfomatListGate)
  return (
    <>
      <div className="w-screen h-screen flex-col flex justify-center items-center gap-4">
        {loading ? (
          <LoaderSpinner />
        ) : (
          <>
            <InfomatList />
          </>
        )}
      </div>
    </>
  )
}

const route = createRoute()

export const InfomatsPage = { route, Infomats }
