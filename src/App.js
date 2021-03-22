import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails'
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
          <Header/>
          <Switch>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
            <PrivateRoute path="/book">
              <Book />
            </PrivateRoute>
            <PrivateRoute path="/bookDetails">
              <BookDetails />
            </PrivateRoute>
            
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/bookDetails/:transportType">
              <BookDetails/>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
