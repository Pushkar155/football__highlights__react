import './App.css';
import Conatin from './compo/contain/Conatin';
import Home from './compo/Home/Home';
import {Route,Routes} from "react-router-dom";
// import {NavLink} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contain" element={<Conatin />} />
      </Routes>
    </div>
  );
}
export default App;
