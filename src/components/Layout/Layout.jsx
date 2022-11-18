import { useLocation, Link } from 'wouter'

import { Button } from '../Account/account.style'
import { Page, Container, Header, Title, Main, Footer } from './layout.style'

export default function Layout({ children }) {
  const [location] = useLocation()
  return (
    <Page>
      <Container>
        <Header>
          <h1>NCR - Challenge</h1>
        </Header>
        <Title>
          <div className='texts'>
            <p>Consulta de Saldo</p>
            <h1>
              {location === '/'
                ? 'Selecciona la Cuenta a Consultar'
                : 'Este es tu saldo actual'}
            </h1>
          </div>
        </Title>
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
