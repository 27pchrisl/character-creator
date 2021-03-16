import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import styles from './app.module.css';

function App() {
  return (
    <>
      <div className={styles.backgroundBlock}/>
      <CharacterEditor/>
      <Footer/>
    </>
  );
}

export default App;
