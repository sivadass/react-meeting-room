import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const css = require('./stylesheets/style.scss');

class App extends React.Component{
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
