import { DocumentsList } from '@components/documents_list'
import { createRoute } from 'atomic-router'

const route = createRoute()

const DocListView = () => (
  <>
    <div className="w-full h-14"></div>
    <DocumentsList />
  </>
)

export const DocListViewPage = { DocListView, route }
