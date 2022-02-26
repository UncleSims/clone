import Button from './Button';
import twitter from './icons/twitter.svg';
import Form from './Form';
import TinyButton from './TinyButton';

const Info = () => {
    return (
        <div className='field-text'>
            <strong className='text'>Register</strong>
            <p className='field-text2'> Create a profile to post an answer.</p>
            <Button />
            <button className='twitter-button'>
            <img src={twitter} alt='twitterLogo' className='twitter-logo'/>
            <p className='twitter-text'>Continue with Twitter</p></button>
            <Form />
            <TinyButton label={<p className="info-button-text">Sign up</p>} type="tertiary" />
        </div>        
    );
}
 
export default Info;