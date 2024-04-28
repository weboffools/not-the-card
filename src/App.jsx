
import Sidebar from './components/Sidebar';
import CardArea from './components/CardArea';

function App({ title, subtitle }) {
  return (
    <div className='container'>
    <div className='header'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
      <Sidebar />
      <CardArea />
    </div>
  )
}

export default App;
