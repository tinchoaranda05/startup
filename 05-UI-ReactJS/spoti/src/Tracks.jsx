import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

var SpotifyWebApi = require('spotify-web-api-node');

//	aca estas instanciando el nodo que bajaste recien
//	y le asignas las credenciales que son opcionales
//	pero necesitas esta variable para despues llamar a las
//	funciones del nodo, entendes?
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});


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
		spotifyApi.getAlbumTracks(this.props.id)
  		.then((data) => {
  			this.state.TrackList.push(data.body.items)
  			this.setState({
  				TrackList: this.state.TrackList[0],
  				TrackShow: false
  			})
  			
  		}, (err) =>{
    		console.error(err);
  		});	
	}

	render(){

		this.state.TrackShow ? this.searchTrack() : null

		return(
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<h2 className='text-center'>Songs</h2>
					</div>
				</div>
			{this.state.TrackList.map((data, number) =>{
				return (
					<div key={number} className='col-md-4 spoti'>

						<div className='caption'>
							<p className='link'>Song: {data.name}</p>
						</div>
						<audio controls="controls" src={data.preview_url}>
						</audio>
						<a href={data.external_urls.spotify} target="_blank"><span className='glyphicon glyphicon-download'></span></a>
					</div>
					
			)})}	
			</div>
		)
	}
}

