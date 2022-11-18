import AccountContainer from '../components/AccountContainer'
import AccountInfo from '../components/AccountInfo'

export const ROUTES = [
  { path: '/', component: AccountContainer },
  { path: '/:id', component: AccountInfo },
]
