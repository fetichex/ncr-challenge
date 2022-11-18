import { customRender, screen } from '../../utils/test-utils'
import Layout from './Layout'

describe('Layout', () => {
  it('should customRender the application', () => {
    customRender(<Layout />)
  })
  it('the title should be visible', () => {
    customRender(<Layout />)
    expect(screen.getByText(/NCR - challenge/i)).toBeInTheDocument()
  })
})
