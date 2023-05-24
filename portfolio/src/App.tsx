import React from 'react';
import './App.css';
import NavBar from './header/navbar';

const App : React.FC = () => {
  return (
    <div >
      <NavBar />
      <div className="Content">
        <h2> Welcome </h2>
      </div>
    </div>
  );
}

export default App;
