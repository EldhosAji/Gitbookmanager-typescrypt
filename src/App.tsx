import React from "react";
import "./App.css";

import { Home, Search } from "./View/Index";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Components/Index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./redux/Index";

const store = createStore(reducer);
const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};
export default App;
