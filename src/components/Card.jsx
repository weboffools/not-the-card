import "../styles/Card.css";
import { useEffect } from "react";
const url = 'https://akabab.github.io/starwars-api/api/id/';

export default function Card({ index, id, cards, addCard }) {
  useEffect(
    () => {
    let ignore = false;
    fetch(`${url}${id}.json`)
        .then(response => response.json())
        .then((response) => {
      if (!ignore) {
        addCard(r => [...r, response.image]);
      }
    });
    return () => {
      ignore = true;
    }
  }, [addCard, id ]);
  return <div className="card"><img src={cards[Number(index)]} alt=''/></div>;
}
