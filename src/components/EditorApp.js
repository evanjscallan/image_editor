import React from 'react';
import ImageChange from './ImageChange'
import Downloader from './Downloader'
import Histogram from './Histogram';
import './styles.css'

//Main (Ignore other file)





export default class EditorApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			image: 'https://media.istockphoto.com/photos/funny-west-highland-white-terrier-dog-decorated-with-photo-props-sits-picture-id1292884801?b=1&k=20&m=1292884801&s=170667a&w=0&h=L5QgEFpFN1be2Qx8Q9PUWolafU_ecaqYiNwga6eoqxs=',
			brightness:'1',
			saturation: '1',
			contrast: '100',
			width: '500',
			height: 'auto',

		}
		this.handleChange=this.handleChange.bind(this);
		this.changeImage=this.changeImage.bind(this);
	}

	handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, () => console.log(this.state.range))
  	}



	changeImage(imageUrl){
		 this.setState({image: imageUrl});

	}


	render() {
		    const {width, height, brightness, saturation, contrast} = this.state;
		    
		    const imgStyle = {
		      width: width + 'px',
		      height: height + 'px',
		      filter: `brightness(${brightness}) saturate(${saturation}%) contrast(${contrast}%)`
		    };
		    //place back in return
			//<ImageChange image={this.state.image} changeImage={this.changeImage}/>
		return(
			<React.Fragment>
			<div className='main-layout'>
			<img className='box1 input-image' style={imgStyle} src={this.state.image}></img>
			<form className='box1 settings-bar'>
				<h3>Brightness</h3>
				<input type='range' name='brightness' min={0}  max={2} step={0.01} onChange={this.handleChange} />
				<h3>Saturation</h3>
				<input type='range' name='saturation' min={0}  max={200} step={0.01} onChange={this.handleChange} />
				<h3>Contrast</h3>
				<input type='range' name='contrast' min={0}  max={200} step={0.01} onChange={this.handleChange} />
				<h3>Width</h3>
				<input type='range' name='width' min={0}  max={1000} step={0.01} onChange={this.handleChange} />
				<h3>Height</h3>
				<input type='range' name='height' min={0}  max={1000} step={0.01} onChange={this.handleChange} />
			<a download='image.jpg' href={this.state.image} download>Click to Download</a>
			</form>


		</div>
		
		</React.Fragment>
			)
	}


}

//<Downloader style={imgStyle} alteredImage={this.state.image}/>