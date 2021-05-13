import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import CharacterDetail from "./CharacterDetail";
import styled from "styled-components";

const StyledApp = styled.div`
  padding: 100px;
`;

function App() {
  return (
    <StyledApp>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/character/:uid" exact component={CharacterDetail} />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
