import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import PersonalPage from './components/PersonalPage'
import FriendPage from './components/FriendPage'
import WebsitePage from './components/WebsitePage'
import MapPage from './components/MapPage'
import SearchPage from './components/SearchPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='nav_bar bg-transparent'>
            <Navbar className='bg-transparent'/>
          </div>
          <Route exact path="/" component={MapPage} />
          <Route path="/personalPage" component={PersonalPage} />
          <Route path="/friendPage" component={FriendPage} />
          <Route path="/websitePage" component={WebsitePage} />
          <Route path="/SearchPage/:search_content" component={SearchPage} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
