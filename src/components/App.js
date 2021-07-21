import { Route, Link, Switch } from "react-router-dom";

import logo from "../logo.svg";
import TransferContainer, { TransferPage } from "./pages/transfer";
import "../App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/transfer">
          <TransferPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
