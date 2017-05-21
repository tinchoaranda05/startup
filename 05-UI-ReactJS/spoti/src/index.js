import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Artists from 'Artists';
import Albums from 'Albums';
import Tracks from 'Tracks';

// -------------------------------------------


// -------------------------------------------


class SpotiApp extends React.Component {

	constructor(){
		super();
		this.state= {
			ArtistID: '',
			AlbumID: '',
			SearchValue: '',
			ArtistShow: false,
			AlbumShow: false,
			TrackShow: false,
		}
		this.handleChange= this.handleChange.bind(this)
		this.handleSubmit= this.handleSubmit.bind(this)
		this.searchFor= this.searchFor.bind(this)
		this.searchAlbum= this.searchAlbum.bind(this)
	}

	handleChange(e){
		this.setState({[e.target.value]: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		this.setState({
			SearchValue: e.target.srch.value,
			ArtistShow: true
		})
	}

	searchFor(e){
		this.setState({
			ArtistID: e,
			AlbumShow: true,
			ArtistShow: false
		})
		
	}

	searchAlbum(e){
		this.setState({
			AlbumID: e,
			TrackShow: true,
			AlbumShow: false
		})
		
	}

	searchTrack(e){
		this.setState({
			AlbumID: e,
			TrackShow: false
		})
		
	}
	
	
	
	render(){
		
		return (

			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-md-offset-5'>
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
						{this.state.ArtistShow ? <Artists name={this.state.SearchValue} getArtist={this.searchFor} /> : null }
					</div>
				</div>
				<div className='row'>
					<div>
						{this.state.AlbumShow ? <Albums id={this.state.ArtistID} getAlbum={this.searchAlbum} /> : null }
					</div>
				</div>

				<div className='row'>
					<div>
						{this.state.TrackShow ? <Tracks id={this.state.AlbumID} getTrack={this.searchTrack} /> : null }
					</div>
				</div>
			</div>
		
	)}
}



ReactDOM.render(
  <SpotiApp />,
  document.getElementById('root')
);
