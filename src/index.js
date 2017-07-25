import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const css = require('./stylesheets/style.scss');

class App extends React.Component{
  componentWillMount(){
    function start() {
      // Refernce URL
      // https://developers.google.com/api-client-library/javascript/start/start-js

      // 2. Initialize the JavaScript client library.
      gapi.client.init({
        'apiKey': '992549188018',
        // Your API key will be automatically added to the Discovery Document URLs.
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        // clientId and scope are optional if auth is not required.
        'clientId': '3prg54pp18je3e3qhgcttgl11491c4dm.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/calendar',
      }).then(function() {
        // 3. Initialize and make the API request.
        // return gapi.client.people.people.get({
        //   'resourceName': 'people/me',
        //   'requestMask.includeField': 'person.names'
        // });
        console.log('hi')
      }).then(function(response) {
        console.log(response.result);
      }, function(reason) {
       // console.log('Error: ' + reason.result.error.message);
      });
    };
    // 1. Load the JavaScript client library.
    gapi.load('client', start);
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
