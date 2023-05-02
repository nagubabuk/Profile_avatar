import React from 'react';
import HeaderComponent from './Components/Header';
import Profile from './Components/Profile';
import './App.css'


const App: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <Profile />
    </div>
  );
};

export default App;