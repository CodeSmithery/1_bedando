import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(); 
/*
    Ez egy “csatorna”, amin keresztül lejjebb lévő komponensek (pl. a csúszka) 
    elérik a darkMode állapotot és a toggleDarkMode 
    függvényt anélkül, hogy props-okat kéne végigpasszolni.
*/

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('dark-mode');
    return saved === 'true' || false;
  }); 
  /*
    A useState-et egy függvénnyel inicializáljuk, ami először megpróbálja visszaolvasni a dark-mode értékét a localStorage-ból. 
    Ha van ilyen érték és az 'true', akkor true lesz a kezdőérték, egyébként false.   
  */

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
    localStorage.setItem('dark-mode', darkMode); // A localStorage.setItem('dark-mode', darkMode) elmenti az aktuális értéket, hogy legközelebb is ezt használjuk.
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev); // Fordítja a darkMode értékét.

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  ); // A value objektumban adja tovább a gyerek komponenseknek a darkMode állapotot és a toggleDarkMode függvényt.
};
