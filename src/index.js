import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const css = require('./stylesheets/style.scss');

var CLIENT_ID = '992549188018-3prg54pp18je3e3qhgcttgl11491c4dm.apps.googleusercontent.com';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showAuthButton: false,
      showSignOutButton: false
    };
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
  }
  handleAuthClick(){
    gapi.auth2.getAuthInstance().signIn();
  }
  handleSignoutClick(){
    gapi.auth2.getAuthInstance().signOut();
  }
  handleClientLoad() {
    gapi.load('client:auth2', this.initClient);
  }
  initClient(/****here you've had parameters that made config vars unaccessible*****/) {
    gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(function () {
      console.log(window.gapi);
      // Listen for sign-in state changes.

      // ************* to access instance method you have to use `this.updateSigninStatus`  
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

      // **************this code is unnecessary and causes errors***** 
      // authorizeButton.onclick = handleAuthClick;
      // signoutButton.onclick = handleSignoutClick;
    });
  }
  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      this.setState({
        showAuthButton: false,
        showSignOutButton: true
      })
      //listUpcomingEvents();
      //insertNewEvent();
    } else {
      this.setState({
        showAuthButton: true,
        showSignOutButton: false
      })
    }
  }
  componentDidMount(){
    this.handleClientLoad();
  }
  render(){
    let authButton = <button id="authorize-button" onClick={this.handleAuthClick.bind(this)}>Authorize</button>
    let signOutButton = <button id="signout-button" onClick={this.handleSignoutClick.bind(this)}>Sign Out</button>
    return(
      <div className="container">
        {this.state.showAuthButton ? authButton : null}
        {this.state.showSignOutButton ? signOutButton : null}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
