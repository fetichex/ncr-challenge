import { render , screen} from '../../utils/test-utils'
import AccountContainer from './AccountContainer'

describe('AccountContainer', () => {
  it('should render de component', () => {
    render(<AccountContainer />)
    screen.debug()
  })
})
