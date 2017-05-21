
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
		spotifyApi.searchArtists(this.props.name,  { limit : 8, offset: 0 })
  		.then((data) => {
  			this.state.ArtistList.push(data.body.artists.items)
  			
  			this.setState({
  				ArtistList: this.state.ArtistList[0],
  				ArtistShow: false
  			})
  			
  		}, (err) =>{
    		console.error(err);
  		});

  		
	}
	

	handleArtist(e){
		this.props.getArtist(e.target.id);
		this.setState({
			AlbumShow: true
		})
	}
	render(){
		this.state.ArtistShow ? this.searchArtist() : null
		return(
			<div className='container'>
			{this.state.ArtistList.map((data, number) =>{
				return (
					<div key={number} className='col-md-3'>
						<a>
							<img onClick={this.handleArtist} id={data.id} className='img-thumbnail img-responsive imagen center-block' alt={data.name} src={data.images[0].url} />
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