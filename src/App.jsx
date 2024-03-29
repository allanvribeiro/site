import "./App.css";
import Profile from './assets/profile.jpg'; 
import {TbBrandTwitter} from 'react-icons/tb';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {SiDevdotto, SiGithub} from 'react-icons/si';

function App() {

  return (
    <div className="App">
      <div>
        <img style={{borderRadius: '35%'}} width='200px' height='200px' src={Profile} alt="Foto de Allan Vieira Ribeiro"/>
      </div>
      <h1>Allan Vieira Ribeiro</h1>
      <div className="card">
        <a className="iconsn" href="https://twitter.com/allanvribeiro" aria-label="Twitter">
          <TbBrandTwitter size={'50px'}/>
        </a>
        <a className="iconsn" href="https://www.linkedin.com/in/allanvribeiro/" aria-label="Linkedin">
          <AiOutlineLinkedin size={'50px'}/>
        </a>
        <a className="iconsn" href="https://dev.to/allanvribeiro" aria-label="Blog no DEV.to">
          <SiDevdotto size={'50px'}/>
        </a>
        <a className="iconsn" href="https://github.com/allanvribeiro" aria-label="Github">
          <SiGithub size={'50px'}/>
        </a>
      </div>
      <p className="read-the-docs">
        Java developer, gamer and aspiring music composer
      </p>
    </div>
  )
}

export default App
