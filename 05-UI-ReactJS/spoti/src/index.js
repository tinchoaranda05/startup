import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Artists from './Artists';
import Albums from './Albums';
import Tracks from './Tracks';
import Releases from './Releases';

// -------------------------------------------


// -------------------------------------------


class SpotiApp extends React.Component {

	constructor(){
		super();
		this.state= {
			ArtistID: '',
			AlbumID: '',
			SearchValue: '',
			mode: ''
		}
		this.handleChange= this.handleChange.bind(this)
		this.handleSubmit= this.handleSubmit.bind(this)
		this.searchArtist= this.searchArtist.bind(this)
		this.searchAlbum= this.searchAlbum.bind(this)
	}

	handleChange(e){
		this.setState({[e.target.value]: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		this.setState({
			SearchValue: e.target.srch.value,
			mode: 'artist'
		})
	}

	searchReleases(e){
		this.setState({
			AlbumID: e,
			mode: 'album'
		})		
	}

	searchArtist(e){
		this.setState({
			ArtistID: e,
			mode: 'album'
		})		
	}

	searchAlbum(e){
		this.setState({
			AlbumID: e.id,
			AlbumURL: e.src,
			mode: 'track'
		})	
	}

	searchTrack(e){
		this.setState({
			AlbumID: e,
			mode: ''
		})	
	}

	render(){
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-md-offset-5 fadein'>
						<h1 className=''>Search Artist</h1>
						<form className="navbar-form" onSubmit={this.handleSubmit} >
						    <div className="input-group">
						    	<input className="form-control" placeholder="Search" name="srch" id="srch" type="text" value={this.state.ArtistName} onChange={this.handleChange} />
						    	<div className="input-group-btn">
						        	<button className="btn btn-default btn-info" type="submit"><i className="glyphicon glyphicon-search"></i>	
						        	</button>
						    	</div>
	    					</div>
	  					</form>
					</div>
				</div>
				<div className='row'>
					<div>
						{this.state.mode ==='releases' ? <Releases getReleases={this.searchReleases} /> : null }
					</div>
				</div>
				<div className='row'>
					<div>
						{this.state.mode ==='artist' ? <Artists name={this.state.SearchValue} getArtist={this.searchArtist} /> : null }
					</div>
				</div>
				<div className='row'>
					<div>
						{this.state.mode ==='album' ? <Albums id={this.state.ArtistID} getAlbum={this.searchAlbum} /> : null }
					</div>
				</div>

				<div className='row'>
					<div>
						{this.state.mode ==='track' ? <Tracks id={this.state.AlbumID} url={this.state.AlbumURL} getTrack={this.searchTrack} /> : null }
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
  <SpotiApp />,
  document.getElementById('root')
);
