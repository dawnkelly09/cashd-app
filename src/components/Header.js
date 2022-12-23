import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {
  return (
    <header className='header'>
        <h1>Welcome to Cash'd</h1>
        <h2>Cash’d gives you the tools to find your ideal cannabis strain</h2>
        <Button color='green' text='Suggest a Strain'/>   
    </header>
  )
}

export default Header