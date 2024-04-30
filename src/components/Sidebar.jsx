import Score from "./Score";
import "../styles/Sidebar.css";
export default function Sidebar({ score, best }) {
  return (
    <div className="sidebar">
      <Score score={score} best={best}/>
    </div>
  );
}
