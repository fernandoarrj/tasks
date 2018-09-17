import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'

import './FormTask.css'

const baseUrl = 'http://127.0.0.1:8000/api/'

class ErrorService extends React.Component {
	render () {
		return (
			<div>
				<p className="alert alert-danger">
					Erro com o servidor, por favor teste novamente.
				</p>
			</div>
		)
	}
}

class ErrorMessage extends React.Component {
	
	constructor(props) {
		super(props)
		this.errMsg = this.props.errMsg
	}
	
	render () {
		return (
			<div>
				<p className="alert alert-danger">{this.errMsg}</p>
			</div>
		)
	}
}

class SuccessMessage extends React.Component {
	render() {
		return (
			<div>
				<p className="alert alert-success">Task has been created.</p>
			</div>
		)
	}
}

class FormTask extends React.Component {
	
	constructor(props) {
		super(props)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.clearErrorMessage = this.clearErrorMessage.bind(this)

		this.errMsg = ''
	}
	
	validationForm(name, done, dtdone) {
		if (name === '') {
			this.errMsg = 'You have to describe the task.'
			return false
		}
		return true
	}
	
	hasError() {
		ReactDOM.render(
			<ErrorMessage errMsg={this.errMsg}/>, 
			document.getElementById('errorMessage')
		)
	}
	
	clearErrorMessage() {
		ReactDOM.render(
			<p></p>, 
			document.getElementById('errorMessage')
		)
	}
	
	sucessMessage() {
		ReactDOM.render(
			<SuccessMessage />, 
			document.getElementById('errorMessage')
		)
		setTimeout(() => {
			ReactDOM.render(
				<p></p>, 
				document.getElementById('errorMessage')
			)
		}, 10 * 1000)
	}
	
	errorService() {
		ReactDOM.render(
			<ErrorService />,
			document.getElementById('errorMessage')
		)
	}
	
	handleFormSubmit(e) {
		e.preventDefault()
		const name = e.target.elements.nameTask.value
		const done = e.target.elements.doneTask.checked
		let dtdone = e.target.elements.dtdoneTask.value
		
		if (dtdone === '') { dtdone = null }
		
		
		if (this.validationForm(name, done, dtdone)) {
			axios.post(baseUrl, {
				name,
				done,
				dtdone
			})
			.then(this.sucessMessage)
			.catch(this.errorService)
			
		} else {
			return this.hasError()
		}
		
	}
	
	render() {
		return (
			<div>
				<h1> Create Task </h1>
				
				<div id="errorMessage">
				
				</div>
				
				<form onSubmit={this.handleFormSubmit} method="POST">
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


export default FormTask
