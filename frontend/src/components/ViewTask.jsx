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
			<div>
				{this.state.tasks.map(function(e) {
					return (
						<p>e.name</p>
					)
				})}
			</div>
		)
	}
}

export default ViewTask
