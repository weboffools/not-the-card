import Sidebar from "./components/Sidebar";
import CardArea from "./components/CardArea";
import { useState } from "react";

function App({ title, subtitle }) {
  const [score, setScore] = useState(0);
  const [ids, setIds] = useState([1, 2, 3, 5, 6, 8, 10, 13, 14, 20]);
  const [end, setEnd] = useState(false);
  const [best, setBest] = useState(0);

  function handleEnd() {
    setEnd(true);
    if (score > best) {
      setBest(score);
    }
  }

  function handleRestart() {
    setScore(0);
    setEnd(false);
  }

  if (!end) {
    return (
      <div className="container">
        <div className="header">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <Sidebar score={score} best={best} />
        <CardArea
          score={score}
          updateScore={setScore}
          ids={ids}
          changeIds={setIds}
          end={end}
          endGame={handleEnd}
        />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="header">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <Sidebar score={score} />
      <div>
        <h2> Game Over! </h2>
        <h3>Final Score: {score}</h3>
        <button onClick={handleRestart}>Restart?</button>
      </div>
    </div>
  );
}
export default App;
