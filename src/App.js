import React from 'react';
import Albums from './components/Albums';
import Members from './components/Members';
import LikeButton from './components/LikeButton';

function App() {
  return (
    <main>
      <h1>Personal Pokédex</h1>
      <LikeButton />
      <Members />
      <Albums />
    </main>
  );
}

export default App;
