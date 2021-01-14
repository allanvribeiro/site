import Home from "./pages/home";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
