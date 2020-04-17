import React from 'react';
import { Routing } from './components/Routing';
import { AsideNav } from './components/AsideNav';
import { Header } from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="app-content">
          <AsideNav />
          <Routing />
        </div>
      </div>
    </div>
  );
}

export default App;
