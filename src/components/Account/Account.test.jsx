import { customRender, screen } from '../../utils/test-utils'
import Account from './Account'

describe('Account', () => {
  it('should customRender the component', ({ t = 'ca', n = 599238, i = 3 }) => {
    customRender(<Account t={t} n={n} i={i} />)
    screen.debug()
  })
  it('"t" should be a string, "n" and "i" should be numbers', () => {
    const t = 'cc'
    const n = 8994738
    const i = 2
    customRender(<Account t={t} n={n} i={i} />)
    expect(typeof t).toBe('string')
    expect(typeof n).toBe('number')
    expect(typeof i).toBe('number')
  })
  it('should customRender "Cuenta Corriente" if "t" is equal to "CC"', () => {
    const t = 'cc'
    const n = 8994738
    const i = 2
    customRender(<Account t={t} n={n} i={i} />)
    expect(screen.getByText(/cuenta corriente/i)).toBeInTheDocument()
  })
  it('should customRender "Caja de Ahorros" if "t" is equal to "CA"', () => {
    const t = 'ca'
    const n = 8994738
    const i = 2
    customRender(<Account t={t} n={n} i={i} />)
    expect(screen.getByText(/caja de ahorros/i)).toBeInTheDocument()
  })
})
