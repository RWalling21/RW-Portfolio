import React from 'react';
import './App.css';
import NavBar from './header/Navbar';
import Hero from './hero/Hero';

const App : React.FC = () => {
  return (
    <div>
      <NavBar />
      
      <Hero />
    </div>
  );
}

export default App;
