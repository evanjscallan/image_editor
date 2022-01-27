import React from 'react';
import EditorApp from './EditorApp';
import classes from './styles.module.css';


export default class ImageChange extends React.Component{
	constructor(props){
		super(props);
	this.state = {
		imageURL: ''
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);
	}



	handleChange(e){
		//state to whatever user sets
		this.setState({
			imageUrl: e.target.value});
		}

	//prevent page reload and use changeImage function to set imageUrl
	handleSubmit(e){
		e.preventDefault();
	this.props.changeImage(this.state.imageUrl);

	}

	render(){

		return(
				<React.Fragment>
					<form onSubmit={this.handleSubmit}>
					<input 
					type='text'
					defaultValue={this.props.image}
					onChange={this.handleChange}></input>
					<button>Submit</button>
				</form>
				</React.Fragment>

			

		)
	}
}