import React from 'react';
import './AboutMe.css';
import { RouteProps, Link } from 'react-router-dom';
import { BackArrow } from '../../Assets';

export default function AboutMe(props: RouteProps): JSX.Element {
  return (
    <>
      <div className='back-btn'>
        <Link to='/'>
          <img src={BackArrow} alt='Back Arrow' />
        </Link>
      </div>
      <div className='bio'>
        <p>
          I started learning web development in early 2018, after going to
          school and practicing in my free time. After building static websites
          for a year, I decided to take my interest to the next level and join a
          coding boot camp to learn more and learn how to work as a team with
          other developers. Now a little bit about me as a person outside of
          developing. I was born in Indiana but lived most of my life in Florida
          then moved to Washington in 2019. Therefore I am a big fan of the
          Colts & Seahawks. I also love playing video games mostly first-person
          shooters because I grew up on great games like Halo and Call of Duty.
          I also spend a lot of my time on Medium reading up on the latest
          framework updates.
        </p>
      </div>
    </>
  );
}
