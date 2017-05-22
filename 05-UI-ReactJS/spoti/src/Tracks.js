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
						<img className='img-responsive center-block' 
								alt={'k'} 
								src={this.props.url} />
					</div>
				</div>
				<div className='row'>
					{this.state.TrackList.map((data, number) =>{
						return (
							<ul key={number} className='col-md-12'>
								<a href={data.external_urls.spotify} target="_blank" className='link'>
									
									<li className='caption'>
										<p className='link'>{data.name}</p>
										
									</li>
								</a>
								<audio className='audio' controls="controls" src={data.preview_url}>
								hol</audio>
							</ul>		
					)})}
				</div>	
			</div>
		)
	}
}
