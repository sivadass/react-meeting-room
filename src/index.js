import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import './stylesheets/style.scss'

render(
  <App />, 
  document.getElementById('root'),
  function(){
    let loader = document.getElementById('app-loader');
    loader.parentNode.removeChild(loader);
  }
)
