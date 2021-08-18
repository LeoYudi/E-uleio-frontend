import React from 'react'
import Routes from './routes'

import { UserContextProvider } from './contexts/User';

import 'antd/dist/antd.css';

function App() {

  return (
    <UserContextProvider>
      <div>
        <Routes />
      </div>
    </ UserContextProvider>
  );
}

export default App;
