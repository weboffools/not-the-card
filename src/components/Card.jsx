import "../styles/Card.css";

export default function Card({ pic, name, updateScore }) {

  return <div className='card' onClick={() => updateScore(score => score + 1)}><h3>{name}</h3><img src={pic} alt={name}/></div>;
}
