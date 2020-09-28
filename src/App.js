import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Header from './general/Header.js';
import Footer from './general/Footer.js';
import MainContent from './general/MainContent.js';
import PageRecipe from './general/PageRecipe.js';
import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <MainContent />
                </Route>
                <Route exact path="/recipes/:recipeId" component={PageRecipe} />
                <Redirect to="/" />
            </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
