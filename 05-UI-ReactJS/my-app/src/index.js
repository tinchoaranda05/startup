import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class NewMovie extends React.Component {
  render() {
    return (
      <div className="Movie">
          <ul>
            <li> Title: {this.props.movie.title}
                duration: {this.props.movie.duration} 
                Year: {this.props.movie.year}
            </li>
          </ul>
        
      </div>
    );
  }
}

class ListOfMovies extends React.Component {
  render() {
    const status = 'lista de peliculas:';
    var list = [];
    this.props.movies.forEach(function(movie) {
      list.push(<NewMovie movie={movie} key={movie.title} />)
    });
    


    return (

      <div>
        <div className='status'> {status} </div>
        <div className="ListOfMovies-row">
          {list}
        </div>
      </div>
    );
  }
}


class addMovie extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="insert movie..." />
        <input type="submit" className='add' value='Add' />
      </form>
    );
  }
}



class Movies extends React.Component {
  render() {
    return (
      <div className="Movies">
        
          <addMovie />
          <ListOfMovies movies={this.props.movies} />
        
      </div>
    );
  }
}
var MOVIES = [
  {title: 'iron man', duration: '2hs', year: '2014'},
  {title: 'iron man2', duration: '3hs', year: '2015'},
  {title: 'iron man3', duration: '1hs', year: '2016'}
];
// ========================================

ReactDOM.render(
  <Movies movies={MOVIES} />,
  document.getElementById('root')
);