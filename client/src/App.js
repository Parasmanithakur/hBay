import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Register from "./component/Register";
import { Switch, Route, Link } from "react-router-dom";
import Edit from "./component/Edit";
import Details from "./component/Details";
import { Login } from "./component/login/login";
import { RegisterLogin } from "./component/register/registerLogin";
import Item from "./component/Item";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/view/:id" component={Details} />
        <Route path="/rlogin" component={RegisterLogin} />
        <Route path="/item" component={Item} />
      </Switch>
    </>
  );
}

export default App;
