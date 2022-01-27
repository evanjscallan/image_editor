import React from 'react';
import ReactDOM from 'react-dom';
import ImageParser from 'react-image-parser';
import demoImg from './dummyimage1.jpg';






export default class Histogram extends React.Component{
	constructor(props){
		super(props);
		this.onImageParsed = this.onImageParsed.bind(this);
	}
	

	onImageParsed({data}) {
	return data;
	}

	


	render(){
		
		



		

		
		
		return(
				<React.Fragment>
			   <ImageParser
        		img={demoImg}
        		onImageParsed={this.onImageParsed}/>
        		
        		</React.Fragment>
			)
	}
}
