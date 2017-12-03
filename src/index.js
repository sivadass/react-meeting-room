import React from 'react'
import { render } from 'react-dom'
import Home from './components/Home'
import './stylesheets/style.scss'

render(
  <Home />, 
  document.getElementById('root'),
  function(){
    let loader = document.getElementById('app-loader');
    loader.parentNode.removeChild(loader);
  }
)
