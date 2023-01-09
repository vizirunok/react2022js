import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <div><Link to={'/'}></Link></div>
        <div><Link to={'/layout'}></Link></div>
        <div><Link to={''}></Link></div>
      </div>
    </div>
  );
}

export default App;
