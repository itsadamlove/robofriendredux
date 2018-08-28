import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import Card from './Card'
import {robots} from './robots.js'

ReactDOM.render(
  <div>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
