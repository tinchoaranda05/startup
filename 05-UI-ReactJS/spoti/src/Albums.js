
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
		spotifyApi.getArtistAlbums(this.props.id, {limit: 8, offset: 20})
  		.then((data) => {
  			this.state.AlbumList.push(data.body.items)
  			this.setState({
  				AlbumList: this.state.AlbumList[0],
  				AlbumShow: false
  			})
  			
  		}, (err) =>{
    		console.error(err);
  		});	
	}

	handleAlbum(e){
		
		this.props.getAlbum(e.target.id);
		this.setState({
			TrackShow: true
		})
	}


	render(){

		this.state.AlbumShow ? this.searchAlbum() : null

		return(
			<div className='container'>
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
