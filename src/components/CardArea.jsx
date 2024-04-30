import "../styles/CardArea.css";
import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import shuffle from "../util/shuff";

const url = "https://akabab.github.io/starwars-api/api/";

export default function CardArea({
  score,
  updateScore,
  ids,
  changeIds,
  end,
  endGame,
}) {
  const [characters, setCharacters] = useState([]);
  let cards;

  function handleShuffle() {
    const temp = shuffle([...ids]);
    changeIds(temp);
  }

  useEffect(() => {
    let ignore = false;
    fetch(`${url}all.json`)
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          console.log("Fetching data from external api...");
          setCharacters(response);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  if (characters.length > 0) {
    cards = ids.map((id) => {
      const character = characters.find((c) => c.id === id);
      return (
        <Card
          key={character.id}
          name={character.name}
          pic={character.image}
          score={score}
          updateScore={updateScore}
          shuffle={handleShuffle}
          endGame={endGame}
        />
      );
    });
  }

  return <div className="card-area">{cards}</div>;
}
