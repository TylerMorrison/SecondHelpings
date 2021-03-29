import { Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import SHNavbar from "./components/shnavbar.component";
import Home from "./components/home.component";
import Board from "./components/board.component";
import Facts from "./components/facts.component";
import LogIn from "./components/login.component";
import AddEvent from "./components/add-event.component";
import EditEvent from "./components/edit-event.component";

import history from "./history";

function App() {
  return (
    <Router history={history}>
      <div className="container-fluid" style={{ padding: '0px' }}>
        <SHNavbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/board" exact component={Board} />
        <Route path="/facts" exact component={Facts} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/add" exact component={AddEvent} />
        <Route path="/edit/:id" exact component={EditEvent} />
      </div>
    </Router>
  );
}

export default App;
