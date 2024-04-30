import "../styles/Card.css";
import { useState } from "react";

export default function Card({ pic, name, updateScore, shuffle, endGame }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked) {
      endGame();
    } else {
      updateScore((score) => score + 1);
      shuffle();
      setClicked(true);
    }
  }

  return (
    <div className="card" onClick={handleClick}>
      <h3>{name}</h3>
      <img src={pic} alt={name} />
    </div>
  );
}
