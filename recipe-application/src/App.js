import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import './Navbar.scss';
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App" >

        <Switch>
          <Route exact path="/" component = {HomePage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
