import React from 'react';
import '../style/App.css';
import Heading from "./Heading";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomeContent from "./HomeContent";
import News from "./News";
import Login from "./Login";

function App() {
  return (
    <Router className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
            <NavLink to="/" exact>
                <Navbar.Brand>Mypage</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" exact className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/news" className="nav-link">
                        News
                    </NavLink>
                    <NavLink to="/login" className="nav-link">
                        Login
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      <Container>
          <Switch>
              <Route path="/" exact component={HomeContent}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aut distinctio eligendi fuga maiores odio perspiciatis quisquam vero voluptate. Dicta exercitationem ipsam ipsum, minus recusandae similique suscipit ullam voluptatem!</Route>
              <Route path="/news" component={News}/>
              <Route path="/login" component={Login}/>
          </Switch>
      </Container>

    </Router>
  );
}

export default App;
