import React from 'react';
import './styles.css'
import vs from './assets/VS.svg'
import ActionSelect from './components/playerInterface'

function App() {
  return (
    <div className="app-container">
      <ActionSelect playerName={'Player 1'}/>
      <img src={vs} alt="vs"/>
      <ActionSelect playerName={'Player 2'} />
    </div>
  );
}

export default App;
