import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React from 'react'

import Footer from '../components/templates/Footer'
import Nav from '../components/templates/Nav'
import Logo from '../components/templates/Logo'
import Main from '../components/templates/Main'

export default props => 
	<div className="app">
		<Nav />
		<Main />
		<Footer />
	</div>
