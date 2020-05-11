import React from 'react';
import './Home.css';
import { RouteProps, Link } from 'react-router-dom';
import { Sig, Twitter, GitHub, LinkedIn, Email } from '../../Assets/';

export default function Home(props: RouteProps): JSX.Element {
  return (
    <>
      <header>
        <img src={Sig} alt="Anthony's Signature" />
      </header>
      <div className='nav-btns'>
        <Link to='/AboutMe'>About Me</Link>
        <Link to='/Projects'>Projects</Link>
      </div>
      <ul className='social-media-btns'>
        <li>
          <Link to='https://twitter.com/Anthony_Bostic'>
            <img src={Twitter} alt='Twitter Logo' />
          </Link>
        </li>
        <li>
          <Link to='https://github.com/AnthonyTB'>
            <img src={GitHub} alt='GitHub Logo' />
          </Link>
        </li>
        <li>
          <Link to='https://www.linkedin.com/in/anthonytb/'>
            <img src={LinkedIn} alt='LinkedIn Logo' />
          </Link>
        </li>
        <li>
          <Link to='mailto:contact@anthonyb.dev'>
            <img src={Email} alt='Email Logo' />
          </Link>
        </li>
      </ul>
    </>
  );
}
