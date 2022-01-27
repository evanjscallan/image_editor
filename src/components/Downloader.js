import React from 'react';



export default class Downloader extends React.Component{
	constructor(props){
		super(props)
		
	}



	render(image){
		let imageEdit = this.props.alteredImage;
		let styler = this.props.style

		return(
		<div>
		<a><img style={styler} src={imageEdit}></img></a>
		</div>
		)
	}
}