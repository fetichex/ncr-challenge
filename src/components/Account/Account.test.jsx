import { customRender, screen } from '../../utils/test-utils'
import Account from './Account'

describe('Account', async ({
  accType = 'Cuenta Correinte',
  n = 0,
  saldo = 2,
  id = 1
}) => {
  it('should render the component', () => {
    customRender(<Account t={accType} n={n} id={id} s={saldo} />)
    screen.debug()
  })
  it('"t" should be a string, "n" and "i" should be numbers', () => {
    expect(typeof accType).toBe('string')
    expect(typeof n).toBe('number')
    expect(typeof id).toBe('number')
    expect(typeof saldo).toBe('number')
  })
})
