import { render, screen} from './utils/test-utils'
import App from './App'

describe('App', () => {
  it('should render the application', () => {
    render(<App />)
  })
  it('the title should be visible', () => {
    render(<App />)
    expect(screen.getByText(/NCR - challenge/i)).toBeInTheDocument()
  })
})
