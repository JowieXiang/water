import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Nav/Navbar'
import PersonalPage from './components/user/PersonalPage'
import FriendPage from './components/friend/FriendPage'
import WebsitePage from './components/website/WebsitePage'
import MapPage from './components/map/MapPage'
import SearchPage from './components/search/SearchPage'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import LoggedOut from './components/auth/LoggedOut';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={MapPage} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/logedout' component={LoggedOut} />
            <Route path="/personalPage/:uid" component={PersonalPage} />
            <Route path="/friendPage" component={FriendPage} />
            <Route path="/websitePage" component={WebsitePage} />
            <Route path="/SearchPage/:search_content" component={SearchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
