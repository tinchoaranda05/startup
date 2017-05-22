import React from 'react';

//====================================================

// This class is still in progress. I need Authorization. Some ID and a redirect URI.

//====================================================


export default class Releases extends React.Component {

	constructor(){
		super()
		this.state= {
			ReleasesList: [],
			ReleasesShow: true,
		}
		this.searchReleases= this.searchReleases.bind(this)
		this.handleRelease= this.handleRelease.bind(this)
	}

	searchReleases(){
        fetch('https://accounts.spotify.com/authorize/?client_id=fcecfc72172e4cd267473117a17cbd4d&response_type=code&redirect_uri=http://www.example.com/callback' )
        .then((data) => {
        	return data.json();
        })
        .then((data) => {
        	this.state.ReleasesList.push(data)
        	console.log(this.state.ReleasesList);
        	/*this.setState({
        		ReleasesList: this.state.ReleasesList[0],
        		ReleasesShow: false
        	})*/
        })
        .catch((err) => {
        	console.log(err);
        })
	}

	handleRelease(e){
		this.props.getReleases(e.target.id);
	}
	render(){
		return(
			<div className='container fadein'>
				{this.state.ReleasesShow ? this.searchReleases() : null}
				{this.state.ReleasesList.map((data, number) =>{
					return (
						<div key={number} className='col-md-3'>
							<a className='link'>
								<img onClick={this.handleRelease} id={data.id} className='img-thumbnail img-responsive imagen center-block' alt={data.name} src={data.images[0] ? data.images[0].url : 'https://cdn.shopify.com/s/files/1/0972/6232/files/no-image-placeholder.png'} />
								<div className='caption'>
									<p className='text-center link'>{data.name}</p>
								</div>
							</a>
						</div>				
				)})}	
			</div>	
		)
	}
}