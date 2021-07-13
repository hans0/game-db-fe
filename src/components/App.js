import { Route, Link, Switch } from 'react-router-dom';

import logo from '../logo.svg';
import Transfer from './pages/Transfer';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/transfer'>
          <Transfer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
