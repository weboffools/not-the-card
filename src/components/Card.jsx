import "../styles/Card.css";

export default function Card({ pic, name }) {

  return <div className='card'><h3>{name}</h3><img src={pic} alt={name}/></div>;
}
