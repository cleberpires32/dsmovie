import {ReactComponent as GithubIcon} from 'asserts/img/github.svg';
import './style.css'

function Navbar(){

    return (
        <header>
          <nav className="container">
            <div className="dsmovie-nav-content">
            <h1>DS movie</h1>
            <a href="https://github.com/cleberpires32/dsmovie">
              <div className='dsmovie-contact-container'>
                <GithubIcon/>
                <p className='dsmovie-contact-link'>/devsuperior</p>
              </div>
            </a>
            </div> 
          </nav>
        </header>
      );
}

export default Navbar;