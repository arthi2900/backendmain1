import './App.css';
import Login from './component/Login';
import {Signup} from './component/Signup';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/User/:id">Home</Link>
          </li>
          <li>
            <Link to="/User/Login">Login</Link>
          </li>
          <li>
            <Link to="/User/Signup">Signup</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/User/Login">
          <Login/>
        </Route>
        <Route path="/User/Signup">
          <Signup/>
        </Route>
        <Route path="/User/:id">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
    </div>
  );
}

export default App;
