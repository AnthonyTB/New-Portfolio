import React from 'react';
import './Projects.css';
import { RouteProps, Link } from 'react-router-dom';
import { BackArrow } from '../../Assets/';

export default function Projects(props: RouteProps): JSX.Element {
  return (
    <>
      <div className='back-btn'>
        <Link to='/'>
          <img src={BackArrow} alt='Back Arrow' />
        </Link>
      </div>
    </>
  );
}
