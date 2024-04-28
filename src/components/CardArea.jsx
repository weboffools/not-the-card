import "../styles/CardArea.css";
import Card from "./Card.jsx";
import { useState, useEffect } from "react";

const ids = [1, 2, 3, 5, 6, 8, 10, 13, 14, 20];
const url = "https://akabab.github.io/starwars-api/api/";

export default function CardArea() {
  const [characters, setCharacters] = useState([]);
  let cards;
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
      return (<Card
        key={character.id}
        name={character.name}
        pic={character.image}
      />);
    });
  }

  return <div className="card-area">{cards}</div>;
}
