import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, RouteProps } from 'react-router-dom';
import { Home, AboutMe, Projects } from './Routes';
import { LeftContainer, Heading } from './Components/';

function App(props: any) {
  const [LoadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    setLoadingStatus(true);
  }, []);

  return (
    <div className='App'>
      {LoadingStatus ? (
        <>
          <div className='Left-Container'>
            <LeftContainer />
          </div>
          <div className='Right-Container'>
            <Route
              exact
              path='/'
              render={(renderProps: RouteProps) => <Home {...renderProps} />}
            />
            <Route
              exact
              path='/AboutMe'
              render={(renderProps: RouteProps) => <AboutMe {...renderProps} />}
            />
            <Route
              exact
              path='/Projects'
              render={(renderProps: RouteProps) => (
                <Projects {...renderProps} />
              )}
            />
          </div>
          <Route
            path='/:path'
            render={(renderProps: RouteProps) => <Heading {...renderProps} />}
          />
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
