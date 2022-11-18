import { customRender, screen } from '../../utils/test-utils'
import AccountContainer from './AccountContainer'

describe('AccountContainer', () => {
  it('should customRender de component', () => {
    customRender(<AccountContainer />)
    screen.debug()
  })
  it('should customRender text "Selecciona la Cuenta a Consultar"', () => {
    customRender(<AccountContainer />)
    const text = screen.getByText(/Selecciona la Cuenta a Consultar/i)
    expect(text).toBeInTheDocument()
  })
  it('"Selecciona la Cuenta a Consultar" should be a h1', () => {
    customRender(<AccountContainer />)
    const text = screen.getByText(/Selecciona la Cuenta a Consultar/i)
    const h1 = document.querySelector('h1')
    expect(text === h1).toBe(true)
  })
})
