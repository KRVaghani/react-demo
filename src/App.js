import React from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';
import Users from './Users';
import Home from './Home';
import { Navbar, Nav } from 'react-bootstrap';
import CreateUser from './CreateUser';
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#pricing"> <Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/list">User List</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/create">Create User</Link></Nav.Link>
          </Nav>

        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
