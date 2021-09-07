import React from "react";
import { Albums, Members, LikeButton } from "./components";

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
