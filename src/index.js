import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import Cardlist from './Cardlist'
import {robots} from './robots.js'

ReactDOM.render(
  <Cardlist robots={robots}/>, document.getElementById('root'));
registerServiceWorker();
