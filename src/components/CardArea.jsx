import "../styles/CardArea.css";
import Card from "./Card.jsx";
import { useState } from "react";

export default function CardArea() {
  const [cards, setCards] = useState("");

  return (
    <div className="card-area">
      <Card index='0' addCard={setCards} cards={cards} id="1" />
      <Card index='1' addCard={setCards} cards={cards} id="2" />
      <Card index='2' addCard={setCards} cards={cards} id="3" />
      <Card index='3' addCard={setCards} cards={cards} id="4" />
      <Card index='4' addCard={setCards} cards={cards} id="5" />
      <Card index='5' addCard={setCards} cards={cards} id="6" />
      <Card index='6' addCard={setCards} cards={cards} id="7" />
      <Card index='7' addCard={setCards} cards={cards} id="8" />
      <Card index='8' addCard={setCards} cards={cards} id="9" />
      <Card index='9' addCard={setCards} cards={cards} id="10" />
    </div>
  );
}
