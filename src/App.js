import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";
import Home from "./routers/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
