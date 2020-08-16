import React from 'react';
import logo from './logo.svg';
import './App.css';
import Category from "./Category.js"
import { Route} from 'react-router-dom';
import {  Link } from 'react-router-dom';
import MenuFood from "./MenuFood";



function App() {
  return (
    <div className="App">
        <Route exact path='/' render={() => (
            <header className="App-header">
                <p>
                    Hi- let's start to have fun
                </p>
                <Link
                    to='/search'>
                    <button >Choose food</button>
                </Link>
            </header>
        )}/>

        <Route  path='/search' render={() => (
            <MenuFood/>
        )}/>
    </div>
  );
}

export default App;
