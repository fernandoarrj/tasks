import React from 'react'

import './FormTask.css'

class FormTask extends React.Component {
	render() {
		return (
			<div>
				<h1> Create Task </h1>
				
				<form>
					<div className="form-group">
						<label htmlFor="nameTask">Task</label>
						<input type="text" className="form-control" id="nameTask" 
							name="nameTask" placeholder="Task"/> 
					</div>
					
					<div className="form-group form-check">
						<input type="checkbox" className="form-check-input" id="doneTask" 
							name="doneTask" />
						<label className="form-check-label" htmlFor="doneTask">Done</label>
					</div>
					
					<div className="form-group">
						<label htmlFor="nameTask">Date finish</label>
						<input type="date" className="form-control" id="task" 
							name="task" placeholder="Task"/> 
					</div>
					
					<button className="btn btn-success">Create Task</button>
				</form>
			</div>
		)
	}
}

export default FormTask
