import React from 'react'
import axios from 'axios'

import './ViewTask.css'

class ViewTask extends React.Component {
	
	state = {
		tasks : []
	}
	
	componentDidMount() {
		axios.get('http://127.0.0.1:8000/api/')
			.then(res => {
				this.setState({
					tasks: res.data
				})
				console.log(res.data)
			})
			
	}
	
	render() {
		return (
			<React.Fragment>
				{this.state.tasks.map(function(e) {
					return (
						<div key={e.id} className="view-task">
							<p>{e.name}</p>
							<p>{e.dtcreate}</p>
							<p>{e.dtdone}</p>
						</div>
					)
				})}
			</React.Fragment>
		)
	}
}

export default ViewTask
