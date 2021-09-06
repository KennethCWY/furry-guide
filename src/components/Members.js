import React, { useState } from 'react';

const Members = () => {
  const [memeber, setMember] = useState([
    { name: 'James Hetfield', instrument: "Guitar" },
    { name: 'Kirk Hammet', instrument: "Guitar" },
    { name: 'Lars Ulrich', instrument: "Drums" },
    { name: 'Robert Trujillo', instrument: "Bass" },
  ])

  const renderRows = () => {
    return memeber.map(p => <tr><td>{p.name}</td><td><img src={p.img} /></td></tr>)
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

export default Members;
