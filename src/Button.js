import googleLogo from './icons/googleLogo.svg';

const Button = (props) => {
    return (
          <button className='google-button' onClick={props.handleClick}>
<img src={googleLogo} alt='googleLogo' className='google-logo'/>
           <p className='google-text'>Continue with Google</p></button>)
}
 
export default Button;