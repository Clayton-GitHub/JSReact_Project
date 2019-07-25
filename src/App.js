import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RandomCards from './RandomCards';
import SingleCard from './SingleCard';
import Sets from './Sets';
import Types from './Types';

class App extends Component {

  render() {
    return (
      <Router>
        {/* Here is the main router that is used to navigate through the webpage  */}
        <div className='container'>
            {/* THis is the main container for the webpage */}
          <h1 className='text-center bg-warning'>MTG Project</h1>
          <div className='container'>
              {/* This is the list of links that can be clicked on to navigate the webpage */}
            <div className='row'>
                <Link class='btn btn-dark btn-lg mx-3 col-sm' to='/'>
                    <span>Home</span>
                </Link>
                <Link class='btn btn-dark btn-lg mx-3 col-sm' to='/RandomCards'>
                    <span>Random Cards</span>
                </Link>
                <Link class='btn btn-dark btn-lg mx-3 col-sm' to='/SingleCard'>
                    <span>Single Card</span>
                </Link>
                <Link class='btn btn-dark btn-lg mx-3 col-sm' to='/Sets'>
                    <span>Get Sets</span>
                </Link>
                <Link class='btn btn-dark btn-lg mx-3 col-sm' to='/Types'>
                    <span>Show Types</span>
                </Link>
            </div>
          </div>
          <br></br>
          <div className='container'>
            <div className='row'>
                {/* Here is a list of the switches to switch between the different components */}
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/RandomCards" component={RandomCards} />
                <Route path="/SingleCard" component={SingleCard} />
                <Route path="/Sets" component={Sets} />
                <Route path="/Types" component={Types} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

// This is what will be shown when at home page of webpage
const Home = () => (
    <div className='text-center m-5 text-light'>
    <h1>Welcome to the MTG Project. Choose an option. Click a button.</h1>
  </div>
)

export default App;