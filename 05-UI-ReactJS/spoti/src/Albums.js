import React from 'react';

export default class Albums extends React.Component {
	constructor(){
		super()
		this.state= {
			AlbumList: [],
			AlbumShow: true
		}
		this.searchAlbum= this.searchAlbum.bind(this)
		this.handleAlbum= this.handleAlbum.bind(this)
	}

	searchAlbum(){
		var prom= this.props.id;
        fetch('https://api.spotify.com/v1/artists/' + prom + '/albums')
        .then((data) => {
        	return data.json();
        })
        .then((data) => {
        	this.state.AlbumList.push(data.items)
        	this.setState({
        		AlbumList: this.state.AlbumList[0],
        		AlbumShow: false
        	})
        })
        .catch((err) => {
        	console.log(err);
        })
	}

	handleAlbum(e){
		this.props.getAlbum(e.target);
		this.setState({
			TrackShow: true
		})
	}

	render(){
		return(
			<div className='container fadein'>
			{this.state.AlbumShow ? this.searchAlbum() : null}
				<div className='row'>
					<div className='col-md-12'>
						<h2 className='text-center'>Albums</h2>
					</div>
				</div>
			{this.state.AlbumList.map((data, number) =>{
				return (
					<div key={number} className='col-md-3'>
						<a>
							<img onClick={this.handleAlbum} id={data.id} className='img-thumbnail img-responsive imagen center-block' alt={data.images[0].url} src={data.images[0].url} />
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
