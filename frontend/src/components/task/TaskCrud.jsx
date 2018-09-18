import React from 'react'
import axios from 'axios'

import './TaskCrud.css'

const baseUrl = 'http://127.0.0.1:8000/api/'

const initialState = {
	task : {name: '', done: false, dtdone: new Date()},
	list : []
}

class TaskCrud extends React.Component {
	
	state = { ...initialState }
	
	componentWillMount() { 
		axios(baseUrl).then(resp => {
			this.setState({ list: resp.data })
		})
	}
	
	updateField(e) {
		const task = { ...this.state.task }
		task[e.target.name] = e.target.value
		this.setState({ task })
	}
	
	renderTable() {
		return (
			<table className="table mt-3">
				<thead>
					<tr>
						<th scope="col">Task</th>
						<th scope="col">Done</th>
						<th scope="col">Dt. Done</th>
						<th scope="col">Options</th>
					</tr>
				</thead>
				<tbody>
					{this.renderRows()}
				</tbody>
			</table>
		)
	}
	
	renderRows() {
		return this.state.list.map(task => {
			return (
				<tr key={task.id}>
					<td>{task.name}</td>
					<td>{task.done}</td>
					<td>{task.dtdone}</td>
					<td>
						<button className="btn btn-warning">
							Change
						</button>
						
						<button className="btn btn-danger ml-3">
							Delete
						</button>
					</td>
				</tr>
			)
		})
	}
	
	save(){
		
	}
	
	clear(){
		
	}
	
	remove(){
		
	}
	
	load(){
		
	}
	
	getUpdateList(){
		
	}
	
	renderForm() {
		return (
			
			<div className="form">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label>Task</label>
							<input type="text" className="form-control"
								name="name"
								value={this.state.task.name}
								onChange={e => this.updateField(e)}
								placeholder="Task" />
						</div>
						
						<div className="form-group">
							<label>Done</label>
							<input type="checkbox" className="form-check-input"
								name="done"
								value={this.state.task.done}
								onChange={e => this.updateField(e)}
								placeholder="Done" />
						</div>
						
						<div className="form-group">
							<label>Dt. Done</label>
							<input type="date" className="form-control"
								name="dtdone"
								value={this.state.task.dtdone}
								onChange={e => this.updateField(e)} />
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col-12 d-flex justify-content-end">
						<button className="btn btn-primary">
							Salvar
						</button>
						
						<button className="btn btn-secondary ml-2">
							Cancelar
						</button>
					</div>
				</div>
			</div>
		)
	}
	
	
	render() {
		return (
			<div className="taskcrud">
				{this.renderForm()}
				{this.renderTable()}
			</div>
		)
	}
}

export default TaskCrud
