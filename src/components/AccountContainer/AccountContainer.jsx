import useAccountStore from '../../store'
import Account from '../Account'
import { Card } from '../Account/account.style'
import { Container, ContainerAccounts } from './accountContainer.style'
import usePoster from './hook'

export default function AccountContainer() {
  const { postsPerPage } = usePoster()
  const accounts = useAccountStore((state) => state.accounts)
  const currentPage = useAccountStore((state) => state.currentPage)
  const nextPage = useAccountStore((state) => state.nextPage)
  const prevPage = useAccountStore((state) => state.prevPage)
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const howManyPages = Math.ceil(accounts.length / postsPerPage)
  const currentPosts = accounts.slice(firstPostIndex, lastPostIndex)

  return (
    <Container>
      <ContainerAccounts>
        {currentPage !== 1 ? (
          <Card onClick={() => prevPage()}>Opciones Anteriores</Card>
        ) : null}
        {currentPosts?.map(({ accType, n, saldo, id }) => {
          return <Account key={id} id={id} t={accType} n={n} s={saldo} />
        })}
        {currentPage >= howManyPages ? null : (
          <Card onClick={() => nextPage()}>Mas opciones</Card>
        )}
      </ContainerAccounts>
    </Container>
  )
}
