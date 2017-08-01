import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/home.jsx';

render(
    <Home name='spot' />
	, document.getElementById('reactDiv')
)
