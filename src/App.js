import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Nav/Navbar'
import PersonalPage from './components/user/PersonalPage'
import FriendPage from './components/friend/FriendPage'
import WebsitePage from './components/website/WebsitePage'
import MapPage from './components/map/MapPage'
import SearchPage from './components/search/SearchPage'

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
