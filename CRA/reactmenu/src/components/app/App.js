import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import ThemeSlider from '../scripts/ThemeSlider';
import '../styles/slider.css';
import '../styles/App.css';
import StartLayout from '../scripts/StartLayout';
import '../styles/divstyles.css'


function App() {
  return (
    <div className='main'>
      <StartLayout />
    </div>

  );
}

export default App;
