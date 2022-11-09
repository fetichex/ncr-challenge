import { render } from '../../utils/test-utils'
import Account from './Account'

describe('Account', () => {
  it('should render the component', () => {
    render(<Account />)
  })
  it('should render the component', ({ t = 'cc', n = 1, i = 1 }) => {
    render(<Account t={t} n={n} i={i} />)
  })
})
