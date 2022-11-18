import { customRender, screen } from '../../utils/test-utils'
import AccountContainer from './AccountContainer'

describe('AccountContainer', () => {
  it('should render de component', () => {
    customRender(<AccountContainer />)
    screen.debug()
  })
})
