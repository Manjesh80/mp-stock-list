import React from 'react';
require('./styles/main.scss');
import App from './app';


React.render(
  (<App pageTitle="Home Page">
    <p>Hello, World!</p>
  </App>),
  document.getElementById('content')
);

