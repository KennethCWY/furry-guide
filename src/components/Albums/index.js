import React, { useState } from 'react';

const Albums = () => {
  const [album, setAlbum] = useState([
    { name: 'Kill \'em All', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" },
    { name: 'Ride the Lightning', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" },
    { name: 'Master of Puppets', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" },
    { name: '...And Justice for All', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" },
    { name: 'Black', img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png"},
  ])

  const renderRows = () => {
    return album.map(p => <tr><td>{p.name}</td><td><img src={p.img} /></td></tr>)
  }

  return (
    <table style={{ border: "1px solid black", width: "100vw", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  );
};

export default Albums;
