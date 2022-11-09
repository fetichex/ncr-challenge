import AccountContainer from '../components/AccountContainer'

export function filterAccType(t) {
  if (t.toUpperCase() === 'CA') {
    return 'Caja de Ahorros'
  } else if (t.toUpperCase() === 'CC') {
    return 'Cuenta Corriente'
  }
  return
}

export const ROUTES = [
  { path: '/', component: AccountContainer },
  { path: '/:i', component: AccountInfo }
]
