import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import './App.css'

import FormTask from '../components/FormTask'
import ViewTask from '../components/ViewTask'

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 separator">
						<FormTask />
					</div>
					
					<div className="col-md-6 separator">
						<ViewTask />
					</div>
					
					<div className="col-md-3 separator">
						Visualizar
					</div>
				</div>
			</div>
		)
	}
}

export default App
