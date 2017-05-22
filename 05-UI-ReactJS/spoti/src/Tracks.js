import React from 'react';

export default class Tracks extends React.Component {
	constructor(){
		super()
		this.state= {
			TrackList: [],
			TrackShow: true
		}
		this.searchTrack= this.searchTrack.bind(this)
	}

	searchTrack(){
		var prom= this.props.id;
        fetch('https://api.spotify.com/v1/albums/' + prom + '/tracks')
        .then((data) => {
        	return data.json();
        })
        .then((data) => {
        	this.state.TrackList.push(data.items)
        	this.setState({
        		TrackList: this.state.TrackList[0],
        		TrackShow: false
        	})
        })
        .catch((err) => {
        	console.log(err);
        })
	}

	render(){

		

		return(
			<div className='container fadein'>
			{this.state.TrackShow ? this.searchTrack() : null}
				<div className='row'>
					<div className='col-md-12'>
						<h2 className='text-center'>Songs</h2>
					</div>
				</div>
			{this.state.TrackList.map((data, number) =>{
				return (
					<div key={number} className='col-md-4'>
						<a href={data.external_urls.spotify} target="_blank">
							<img className='img-thumbnail img-responsive imagen center-block' 
								alt={'k'} 
								src={this.props.url} />
							<div className='caption'>
								<p className='text-center link'>{data.name}</p>
							</div>
							<audio controls="controls" src={data.preview_url}>
							</audio>
						</a>
					</div>
					
			)})}	
			</div>
		)
	}
}
