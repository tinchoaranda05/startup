import React from 'react';


export default class Artists extends React.Component {

	constructor(){
		super()
		this.state= {
			ArtistList: [],
			ArtistShow: true,

		}
		this.searchArtist= this.searchArtist.bind(this)
		this.handleArtist= this.handleArtist.bind(this)
	}

	searchArtist(){
        var prom= this.props.name;
        fetch('https://api.spotify.com/v1/search?q=' + prom + '&type=artist')
        .then((data) => {
        	return data.json();
        })
        .then((data) => {
        	this.state.ArtistList.push(data.artists.items)
        	this.setState({
        		ArtistList: this.state.ArtistList[0],
        		ArtistShow: false
        	})
        })
        .catch((err) => {
        	console.log(err);
        })

		/*spotifyApi.searchArtists(this.props.name,  { limit : 8, offset: 0 })
  		.then((data) => {
  			this.state.ArtistList.push(data.body.artists.items)
  			
  			this.setState({
  				ArtistList: this.state.ArtistList[0],
  				ArtistShow: false
  			})
  			
  		}, (err) =>{
    		console.error(err);
  		});*/

	}
	

	handleArtist(e){
		this.props.getArtist(e.target.id);
		this.setState({
			AlbumShow: true
		})
	}
	render(){
		

		return(
			<div className='container fadein'>
			{this.state.ArtistShow ? this.searchArtist() : null}
			{this.state.ArtistList.map((data, number) =>{
				return (
					<div key={number} className='col-md-3'>
						<a>
							<img onClick={this.handleArtist} id={data.id} className='img-thumbnail img-responsive imagen center-block' alt={data.name} src={data.images[0] ? data.images[0].url : 'https://cdn.shopify.com/s/files/1/0972/6232/files/no-image-placeholder.png'} />
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