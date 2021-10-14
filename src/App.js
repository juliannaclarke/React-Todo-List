import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Navbar } from './components/navbar';
import {AllTodosPage} from "./components/pages/all-todos/index";
import {NewTodoPage} from "./components/pages/new-todo/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <AllTodosPage/>
          </Route>
          <Route path="/new">
            <NewTodoPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
