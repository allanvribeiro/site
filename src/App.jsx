import "./App.css";
import Profile from './assets/profile.jpeg'; 
import {TbBrandTwitter} from 'react-icons/tb';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {SiDevdotto} from 'react-icons/si';

function App() {

  return (
    <div className="App">
      <div>
        <img style={{borderRadius: '35%'}} boxSize='175px' src={Profile} alt="Foto de Allan Vieira Ribeiro"/>
      </div>
      <h1>Allan Vieira Ribeiro</h1>
      <div className="card">
        <a className="iconsn" href="https://twitter.com/allanvribeiro">
          <TbBrandTwitter size={'50px'}/>
        </a>
        <a className="iconsn" href="https://www.linkedin.com/in/allanvribeiro/">
          <AiOutlineLinkedin size={'50px'}/>
        </a>
        <a className="iconsn" href="https://twitter.com/allanvribeiro">
          <SiDevdotto size={'50px'}/>
        </a>
      </div>
      <p className="read-the-docs">
        Java developer, gamer and aspiring music composer
      </p>
    </div>
  )
}

export default App
