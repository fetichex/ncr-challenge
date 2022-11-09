import { render, screen } from '../../utils/test-utils'
import Layout from './Layout'

describe('Layout', () => {
  it('should render the application', () => {
    render(<Layout />)
  })
  it('the title should be visible', () => {
    render(<Layout />)
    expect(screen.getByText(/NCR - challenge/i)).toBeInTheDocument()
  })
})
