import { useStore } from 'effector-react'
import { DocumentBox } from './components/DocumentBox'
import { FmbaContainer } from './components/fmba_container'
import { HeaderBlock } from './components/header_block'
import { $viewMode } from './models/infomat'

function App() {
  const mode = useStore($viewMode)

  return (
    <div className="w-screen h-screen flex flex-col">
      <HeaderBlock />
      {/* {
        mode==='record' ? <FmbaContainer infomat={3010101000000019} /> : <DocumentsList />
      } */}
      {mode === 'documents' ? (
        <DocumentBox />
      ) : (
        <FmbaContainer infomat={3010101000000019} />
      )}
      {/* <div className="flex-1 ">
        <iframe
          seamless
          src="https://reg.fmba.gov.ru/infomt/3010101000000019"
          className="h-full w-full "
        />
      </div> */}
    </div>
  )
}

export default App
