import { Route, Switch } from "react-router-dom";

// import logo from "../logo.svg";
import { NavBar } from "./navigation";
import { TransferPage } from "./pages/transfer";
import { TakenPage } from "./pages/taken";
import "../App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          Landing
        </Route>
        <Route path="/barcodes">To Do: List all barcodes</Route>
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
