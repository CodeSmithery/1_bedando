import React from 'react';
import '../styles/App.css';
import StartLayout from '../scripts/StartLayout';
import '../styles/divstyles.css'
import { DataContext } from '../../context/DataContext';


function App() {
  return (
    <div className='main'>
      <StartLayout />
    </div>

  );
}

export default App;
