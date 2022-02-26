import audiobar1 from './playericons/audiobar1.svg';
import Timer from './Timer';
import volup from './playericons/volup.svg';
import circle from './playericons/circle.svg';
import vol from './playericons/vol.svg';
import design from './playericons/design.svg';
import Volume from './Volume';
import Rewind from './Rewind'
import Forward from './Forward';
import Player from './Player';

const Playerbar = () => {
    return ( 
       <footer className='container'>
       
        <img className='design' src={design} alt='design' />
        
        <div className="container1">
          <img className='audiobar' src={audiobar1} alt='Audiobar' />
          <Timer type="primary" />
        <Timer type="tertiary" />
        <Rewind />
        <Forward />
        <Player />
        <img className='circle' src={circle} alt='circlevector' />
        </div>
        
         {/*<div>
         <img className='vol' src={vol} alt='vol' />
        <img className='volup' src={volup} alt='vol' />
         </div>*/}
        <Volume />
        
       </footer>
     );
}
 
export default Playerbar;