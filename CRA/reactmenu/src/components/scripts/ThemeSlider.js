import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeSlider = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Átvesszük a darkMode és toggleDarkMode értékeket a ThemeContext-ból.

  return (
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="slider"></span>
    </label>
  ); // Ez maga a csúszka.
};

export default ThemeSlider;
