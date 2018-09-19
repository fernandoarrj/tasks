import React from 'react'
import axios from 'axios'

import './TaskCrud.css'

const baseUrl = 'http://127.0.0.1:8000/api/'

const initialState = {
	task : {name: '', done: false, dtdone: ''},
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
		if (e.target.name != 'done') {task[e.target.name] = e.target.value}
		else {task[e.target.name] = e.target.checked }
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
	
	returnTrueOrFalse(done) {
		return done ? 'Yeah' : 'Not'
	}
	
	renderRows() {
		return this.state.list.map(task => {
			return (
				<tr key={task.id}>
					<td>{task.name}</td>
					<td>{this.returnTrueOrFalse(task.done)}</td>
					<td>{task.dtdone}</td>
					<td>
						<button className="btn btn-warning"
							onClick={() => this.load(task)}>
							Change
						</button>
						
						<button className="btn btn-danger ml-3"
							onClick={() => this.remove(task)}>
							Delete
						</button>
					</td>
				</tr>
			)
		})
	}
	
	save(){
		const task = this.state.task
		const method = task.id ? 'put' : 'post'
		const url = task.id ? `${baseUrl}${task.id}/` : baseUrl
		
		if (task.dtdone === "") {task.dtdone = null}
		
		
		axios[method](url, task)
			.then(resp => { 
				const list = this.getUpdateList(resp.data)
				console.log(resp.data)
				this.setState({ task: initialState.task, list})
			})
	}
	
	clear(e){
		this.setState({ task: initialState.task })
	}
	
	remove(task){
		axios.delete(`${baseUrl}${task.id}/`)
			.then(resp => {
				const list = this.getUpdateList(task, false)
				this.setState({ list })
				this.clear()
			})
	}
	
	load(task){
		if (task.dtdone === null) { task.dtdone = "" }
		this.setState({ task })
	}
	
	getUpdateList(task, add = true){
		const list = this.state.list.filter(t => t.id !== task.id)
		if (add) list.unshift(task)
		return list
	}
	
	renderForm() {
		return (
			
			<div className="form">
				<div className="row">
					<div className="col-12">
						<div className="form-group row">
							<label className="col-2 col-form-label" htmlFor="name">Task</label>
							<div className="col-10">
								<input type="text" className="form-control"
								name="name"
								value={this.state.task.name}
								onChange={e => this.updateField(e)}
								placeholder="Task" 
								id="name"/>
							</div>
							
						</div>
						
						<div className="form-group row">
							<label className="col-2 col-form-label" htmlFor="done">Done</label>
							<div className="col-10">
								<input type="checkbox" className="form-check"
								name="done"
								value={this.state.task.done}
								onChange={e => this.updateField(e)}
								placeholder="Done" 
								id="done"/>
							</div>
							
						</div>
						
						<div className="form-group row">
							<label className="col-2 col-form-label" htmlFor="dtdone">Dt. Done</label>
							<div className="col-10">
								<input type="date" className="form-control"
								name="dtdone"
								value={this.state.task.dtdone}
								onChange={e => this.updateField(e)}
								id="dtdone"/>
							</div>
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col-12 d-flex justify-content-end">
						<button className="btn btn-primary"
							onClick={e => this.save(e)}>
							Salvar
						</button>
						
						<button className="btn btn-secondary ml-2"
							onClick={e => this.clear(e)}>
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
