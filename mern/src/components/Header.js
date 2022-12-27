import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {

  const onClick = () => {
    console.log('Click')
    
  }
  return (
    <header className='header'>
        <h1 className='header-title'>Welcome to Cash'd</h1>
        <h2 className='header-subtitle'>Cash’d gives you the tools to find your ideal cannabis strain</h2>
        <p className='textarea-instructions'> Our virtual budtender is here to help you create your ultimate cannabis experience. Just tell us what you're looking for from your ideal strain! </p>
          
    </header>
  )
}

export default Header