import Navbar from './Navbar';
import Playerbar from './Playerbar';
import audioAuthor from './contentIcons/audioAuthor.svg'
import Info from './Info';
import TinyButton from './TinyButton';
import './App.css';


function App() {
  return (
    <div className="App">
     <Navbar />
     <>
      <Playerbar />
      </>
      <Info />
      <div className='content' >
        <h4 className='content-text1'>Jerome Bell</h4>
        <p className='content-text2'>Associate at Sentinel</p>
        <img className='audio-author' src={audioAuthor} alt='audioauthor' />
      <h4 className='content-text3'>How can I effectively inspire and motivate <br />
      someone to do something?</h4>
  
      <TinyButton label={<p className="content-button-text2">Startups</p>} type="secondary"/>
      <TinyButton label= {<p className="content-button-text">Inverse</p>} type="primary"/>
      </div>
    </div>
  );
}

export default App;
