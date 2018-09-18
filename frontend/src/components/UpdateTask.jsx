import React from 'react'

import './UpdateTask.css'

class UpdateTask extends React.Component {
	
	state = {
		
	}
	
	render() {
		return (
			<div>
				<h1> Update Task </h1>
				
				<div id="errorMessage">
				
				</div>
				
				<form >
					<div className="form-group">
						<label htmlFor="nameTask">Task</label>
						<input type="text" className="form-control" id="nameTask" 
							name="nameTask" placeholder="Task" onChange={this.clearErrorMessage}/> 
					</div>
					
					<div className="form-group form-check">
						<input type="checkbox" className="form-check-input" id="doneTask" 
							name="doneTask"/>
						<label className="form-check-label" htmlFor="doneTask">Done</label>
					</div>
					
					<div className="form-group">
						<label htmlFor="nameTask">Date finish</label>
						<input type="date" className="form-control" id="dtdoneTask" 
							name="dtdoneTask" placeholder="Done"/> 
					</div>
					
					<button className="btn btn-success">Create Task</button>
				</form>
			</div>
		)
	}
}

export default UpdateTask
