import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./routers/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
