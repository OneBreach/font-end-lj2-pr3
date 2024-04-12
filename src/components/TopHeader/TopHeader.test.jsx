import { render, screen } from '@testing-library/react'
import TopHeader from './TopHeader'

describe('TopHeader', () => {
  it('renders the TopHeader component', () => {
    render(<TopHeader />)
    
    screen.debug(); 
  })
})