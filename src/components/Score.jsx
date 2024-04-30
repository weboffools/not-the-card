import '../styles/Score.css';

export default function Score({score, best}) {
  return (
    <div className='score'>
      <h3>Score</h3>
      <span>{score}</span>
      <h3>Best</h3>
      <span>{best}</span>
    </div>
  );
}
