import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Grade3 from './pages/g3';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/g3" component={Grade3} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}