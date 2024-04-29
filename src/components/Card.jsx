import "../styles/Card.css";
import { useState } from "react";

export default function Card({ pic, name, updateScore, score }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked) {
      alert(`You already clicked that card! Your final score is ${score}`);
      updateScore(0);
      setClicked(false);
    } else {
      updateScore((score) => score + 1);
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
