import { customRender, screen } from './utils/test-utils'
import App from './App'

describe('App', () => {
  it('should customRender the application', () => {
    customRender(<App />)
  })
  it('the title should be visible', () => {
    customRender(<App />)
    expect(screen.getByText(/NCR - challenge/i)).toBeInTheDocument()
  })
})
