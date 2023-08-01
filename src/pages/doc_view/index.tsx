import { $openDocumentFileName, openFile } from '@models/doc_view'
import { createRoute } from 'atomic-router'
import { sample } from 'effector'
import { useStore } from 'effector-react'
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core'
import ru_Ru from '@react-pdf-viewer/locales/lib/ru_RU.json'

import {
  pageNavigationPlugin,
  RenderCurrentPageLabelProps,
  RenderGoToPageProps
} from '@react-pdf-viewer/page-navigation'
import {
  selectionModePlugin,
  SelectionMode
} from '@react-pdf-viewer/selection-mode'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/selection-mode/lib/styles/index.css'
// import '@react-pdf-viewer/thumbnail/lib/styles/index.css'
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'
import { ArrowLeftDoubleIcon } from '@icons/arrow_left_double_icon'
import { ArrowLeftIcon } from '@icons/arrow_left_icon'
import { ArrowRightIcon } from '@icons/arrow_right_icon'
import { ArrowRightDoubleIcon } from '@icons/arrow_right_double_icon'
import { ArrowBack } from '@icons/arrow_back'
import { CSSProperties } from 'react'
// import { history } from '@app/routing'

const route = createRoute<{ fileid: string }>()

sample({
  source: route.opened,
  filter: route.$isOpened,
  fn: ({ params }) => params.fileid,
  target: openFile
})

const Page = () => {
  const fileName = useStore($openDocumentFileName)

  const style = {}

  const selectionModePluginInstance = selectionModePlugin({
    selectionMode: SelectionMode.Hand
  })

  const pageNavigationPluginInstance = pageNavigationPlugin()
  const {
    CurrentPageLabel,
    GoToFirstPage,
    GoToNextPage,
    GoToLastPage,
    GoToPreviousPage
  } = pageNavigationPluginInstance

  const goBackHandle = () => {
    history.back()
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <div className="flex justify-between m-2">
          <button
            className="btn btn-circle btn-ghost hover:text-blue-600 hover:bg-blue-100"
            onClick={goBackHandle}
          >
            <ArrowBack />
          </button>
          <div className="flex gap-2 justify-center items-center">
            <GoToFirstPage>
              {(props: RenderGoToPageProps) => (
                <button
                  className="btn btn-circle btn-ghost hover:text-blue-600 hover:bg-blue-100"
                  onClick={props.onClick}
                  disabled={props.isDisabled}
                >
                  <ArrowLeftDoubleIcon />
                </button>
              )}
            </GoToFirstPage>
            <GoToPreviousPage>
              {(props: RenderGoToPageProps) => (
                <button
                  className="btn btn-circle btn-ghost hover:text-blue-600 hover:bg-blue-100"
                  onClick={props.onClick}
                  disabled={props.isDisabled}
                >
                  <ArrowLeftIcon />
                </button>
              )}
            </GoToPreviousPage>
            <CurrentPageLabel>
              {(props: RenderCurrentPageLabelProps) => (
                <span>{`Страница ${props.currentPage + 1} из ${
                  props.numberOfPages
                }`}</span>
              )}
            </CurrentPageLabel>
            <GoToNextPage>
              {(props: RenderGoToPageProps) => (
                <button
                  className="btn btn-circle btn-ghost hover:text-blue-600 hover:bg-blue-100"
                  onClick={props.onClick}
                  disabled={props.isDisabled}
                >
                  <ArrowRightIcon />
                </button>
              )}
            </GoToNextPage>
            <GoToLastPage>
              {(props: RenderGoToPageProps) => (
                <button
                  className="btn btn-circle btn-ghost hover:text-blue-600 hover:bg-blue-100"
                  onClick={props.onClick}
                  disabled={props.isDisabled}
                >
                  <ArrowRightDoubleIcon />
                </button>
              )}
            </GoToLastPage>
          </div>
        </div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/es5/build/pdf.worker.js">
          <div className="absolute top-16 left-2 right-2 bottom-2 border-2 border-blue-500">
            <Viewer
              fileUrl={`/api/documents/${fileName}`}
              localization={ru_Ru}
              defaultScale={SpecialZoomLevel.PageWidth}
              plugins={[
                selectionModePluginInstance,
                pageNavigationPluginInstance
              ]}
              renderLoader={() => (
                <div className="w-1/6">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-20 w-20 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {/* <div
                    className="radial-progress text-primary"
                    style={{ '--value': percentage } as CSSProperties}
                  >
                    {percentage}%
                  </div> */}
                </div>
              )}
            />
          </div>
        </Worker>
      </div>
    </>
  )
}

export const DocViewPage = {
  Page,
  route
}
