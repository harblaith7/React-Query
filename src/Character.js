import React from "react";

export default function Character({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt="" />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">
          {character.status} - {character.species}
        </p>
        <p className="title">Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
}
