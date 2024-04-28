import '../styles/CardArea.css';
import Card from './Card.jsx';

export default function CardArea() {
  let cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<Card key={i} />);
  }
  return (
    <div className="card-area">
    {cards}

    </div>
  );
}
