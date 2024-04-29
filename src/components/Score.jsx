import '../styles/Score.css';

export default function Score({score}) {
  return (
    <div className='score'>
      <h3>Score</h3>
      <span>{score}</span>
    </div>
  );
}
