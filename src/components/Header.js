import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {

  const onClick = () => {
    console.log('Click')
    
  }
  return (
    <header className='header'>
        <h1>Welcome to Cash'd</h1>
        <h2>Cash’d gives you the tools to find your ideal cannabis strain</h2>
          
    </header>
  )
}

export default Header