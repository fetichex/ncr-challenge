import AccountContainer from '../components/AccountContainer'
import AccountInfo from '../components/AccountInfo'

export function filterAccType(t) {
  const T = t.toUpperCase()
  if (T === 'CA') {
    return 'Caja de Ahorros'
  } else if (T === 'CC') {
    return 'Cuenta Corriente'
  }
  return
}

export const ROUTES = [
  { path: '/', component: AccountContainer },
  { path: '/:i', component: AccountInfo }
]
