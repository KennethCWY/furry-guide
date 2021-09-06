import React from 'react';
import Albums from './components/Albums';
import Members from './components/Members';

function App() {
  return (
    <main>
      <h1>Personal Pokédex</h1>
      <Members />
      <Albums />
    </main>
  );
}

export default App;
