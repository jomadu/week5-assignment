import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import CharacterDetail from "./CharacterDetail";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character/:uid" exact component={CharacterDetail} />
      </Switch>
    </Router>
  );
}

export default App;
