import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    //function for onClick event listener
    //const onClick = () => {
        //console.log('click')}
    

    return(
        <div 
            //add onClick event listener to button as a prop
            onClick={{onClick}} 
            style={{ backgroundColor: color,
                        color: 'white', }} 
            className='btn'>
                {text}
        </div>
    )
}

Button.defaultProps = {
    color: '#099cc0',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
