import { Route, Switch } from "react-router-dom";

// import logo from "../logo.svg";
import { TransferPage } from "./pages/transfer";
import { TakenPage } from "./pages/taken";
import "../App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/transfer">
          <TransferPage />
        </Route>
        <Route path="/taken">
          <TakenPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
