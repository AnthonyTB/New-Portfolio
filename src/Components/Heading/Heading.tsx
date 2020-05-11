import React from 'react';
import './Heading.css';
import { RouteProps } from 'react-router-dom';

export default function Heading(props: RouteProps) {
  return (
    <div className='Heading'>
      <h1>
        {props.location?.pathname
          .substring(1)
          .replace(/([A-Z])/g, ' $1')
          .trim()}
      </h1>
    </div>
  );
}
