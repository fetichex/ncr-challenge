import { useLocation, Link } from 'wouter'

import { Button } from '../Account/account.style'
import { Page, Container, Header, Main, Footer } from './layout.style'

export default function Layout({ children }) {
  const [location] = useLocation()
  return (
    <Page>
      <Container>
        <Header>
          <h1>NCR - Challenge</h1>
        </Header>
        <Main>{children}</Main>
        <Footer id='footer'>
          {location !== '/' ? (
            <Link href='/'>
              <Button>
                <p id='text'>Salir</p>
              </Button>
            </Link>
          ) : null}
        </Footer>
      </Container>
    </Page>
  )
}
