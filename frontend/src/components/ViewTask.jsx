import React from 'react'
import axios from 'axios'

import './ViewTask.css'

const baseUrl = 'http://127.0.0.1:8000/api/'

class ViewTask extends React.Component {
	
	state = {
		tasks : []
	}
	
	constructor(props) {
		super(props)
		
		this.deleteRegister = this.deleteRegister.bind(this)
	}
	
	componentDidMount() {
		axios.get(baseUrl)
			.then(res => {
				this.setState({
					tasks: res.data
				})
				console.log(res.data)
			})
			
	}
	
	deleteRegister() {
		const idTask = 1
		axios.delete(`${baseUrl}${idTask}`)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}
	
	renderTasks() {
		return this.state.tasks.map(function(e) {
			return (
				<div key={e.id} className="view-task">
					<p>Task - {e.name}</p>
					<p>{e.done ? 'Finished' : "don't finished" }</p>
					<p>{e.dtdone ? e.dtdone : null}</p>
					<button className="btn btn-danger">Delete Task</button>
				</div>
				
			)
		})
	}
	
	render() {
		return (
			<React.Fragment>
				{this.renderTasks()}
			</React.Fragment>
		)
	}
}

export default ViewTask
