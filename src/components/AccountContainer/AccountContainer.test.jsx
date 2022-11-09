import { render , screen} from '../../utils/test-utils'
import AccountContainer from './AccountContainer'

describe('AccountContainer', () => {
  it('should render de component', () => {
    render(<AccountContainer />)
    screen.debug()
  })
  it('should render text "Selecciona la Cuenta a Consultar"', () => {
    render(<AccountContainer />)
    const text = screen.getByText(/Selecciona la Cuenta a Consultar/i)
    expect(text).toBeInTheDocument()
  })
  it('"Selecciona la Cuenta a Consultar" should be a h1', ()=>{
    render(<AccountContainer />)
    const text = screen.getByText(/Selecciona la Cuenta a Consultar/i)
    const h1 = document.querySelector('h1')
    expect(text === h1).toBe(true)
  })
})
