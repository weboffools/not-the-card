import Sidebar from "./components/Sidebar";
import CardArea from "./components/CardArea";
import { useState } from "react";

function App({ title, subtitle }) {
  const [score, setScore] = useState(0);
  return (
    <div className="container">
      <div className="header">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <Sidebar score={score} />
      <CardArea score={score} updateScore={setScore} />
    </div>
  );
}

export default App;
