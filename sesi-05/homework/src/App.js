import "./App.css";
import Home from "./page/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Meetup from "./components/molecules/Meetup";
import Layout from "./page/Layout/Layout";
import Explore from "./components/molecules/Explore";

const App = () => {
  return (
    <div className="App container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Layout children={Home} />
          </Route>
          <Route exact path="/meetup">
            <Layout children={Meetup} />
          </Route>
          <Route exact path="/explore">
            <Layout children={Explore} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
