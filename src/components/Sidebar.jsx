import Score from "./Score";
import "../styles/Sidebar.css";
export default function Sidebar({ score }) {
  return (
    <div className="sidebar">
      <Score score={score} />
    </div>
  );
}
