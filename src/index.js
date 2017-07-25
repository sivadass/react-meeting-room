import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const css = require('./stylesheets/style.scss');

class App extends React.Component{
  constructor(props){
    super(props);
    this.start = this.start.bind(this);
    //this.updateSigninStatus = this.updateSigninStatus.bind(this);
  }
  start() {
    gapi.client.init({
      //'apiKey': 'AIzaSyAAetBokn47cnOcfyoSiNX8rOpeI87ZdaU',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      'clientId': '992549188018-3prg54pp18je3e3qhgcttgl11491c4dm.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/calendar',
    }).then(function() {
      gapi.auth2.getAuthInstance().isSignedIn.listen(a);
      //a(gapi.auth2.getAuthInstance().isSignedIn.get());
    })
  };
  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      console.log("Am logged in");
      // authorizeButton.style.display = 'none';
      // signoutButton.style.display = 'block';
      // listUpcomingEvents();
    } else {
      console.log("Am not logged in");
      // authorizeButton.style.display = 'block';
      // signoutButton.style.display = 'none';
    }
  }
  componentWillMount(){
    gapi.load('client', this.start);
  }
  render(){
    return(
      <h1>Hi dude</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
