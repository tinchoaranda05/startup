import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';



// ========================================


class movie {
  constructor(title, duration, year) {
    this.title = title;
    this.duration = duration;
    this.year = year;
    }
}

class Formu extends React.Component {
  constructor(){
    super();
    this.state= {
      title: '',
      duration: '',
      year: '',
      title2: '',
      duration2: '',
      year2: '',
      sub: '',
      sub2: '',
      index: '',
      cssClass: 'hidden',
      listaPelis : []
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDurationChange = this.handleDurationChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.handleEdit=this.handleEdit.bind(this)

    this.handleTitleEdit = this.handleTitleEdit.bind(this)
    this.handleDurationEdit = this.handleDurationEdit.bind(this)
    this.handleYearEdit = this.handleYearEdit.bind(this)
    this.handleSub = this.handleSub.bind(this)
    this.handleSub2 = this.handleSub2.bind(this)

  } 
    
  handleTitleChange(e){
    this.setState({title: e.target.value});
  }

  handleDurationChange(e){
    this.setState({duration: e.target.value});
  }
  
  handleYearChange(e){
    this.setState({year: e.target.value});
  }

  handleTitleEdit(e){
    this.setState({title2: e.target.value});
  }

  handleDurationEdit(e){
    this.setState({duration2: e.target.value});
  }
  
  handleYearEdit(e){
    this.setState({year2: e.target.value});
  }

  handleSub(e){
    this.setState({sub: e.target.value});
  }

  handleSub2(e){
    this.setState({sub2: e.target.value});
  }


  handleSubmit(e){
    e.preventDefault();
    let Peli= new movie(e.target.title.value, e.target.duration.value, e.target.year.value);
    this.state.listaPelis.push(Peli)
    this.setState({
      title: '',
      duration:'',
      year:'',
      listaPelis: this.state.listaPelis
    })
  }

  handleDelete(i){
    this.state.listaPelis.splice(i,1)
    this.setState({
      listaPelis: this.state.listaPelis
    })    
  }

  handleAdd(n){
    this.setState({ cssClass: 'show',
                    index: n
                  })  
  }


  handleEdit(e){
    let PeliNueva= new movie(this.state.title2, this.state.duration2, this.state.year2);
    
    this.state.listaPelis.splice(e,1, PeliNueva)
    this.setState({  
      title: '',
      duration:'',
      year:'',
      listaPelis: this.state.listaPelis,
      cssClass: 'hidden'
    })   
  }
    
  render(){

    return(
      <div className="container">
        <h1 className="text-center">Video Store</h1>
        <div className="row">
          <div className="col-md-8 col-md-offset-3">
            <form  className="form form-group" onSubmit={this.handleSubmit}>
              <h5>Movie title:</h5>
              <input type="text" className="form-control" id="title" placeholder="title.." value={this.state.title} onChange={this.handleTitleChange}/> 
              <h5>Duration</h5>
              <input type="text" className="form-control" id="duration" placeholder="in hours.." value={this.state.duration} onChange={this.handleDurationChange}/> 
              <h5>Release Date</h5>
              <input type="text" className="form-control" id="year" placeholder="year.." value={this.state.year}  onChange={this.handleYearChange}/>
              <input type="Submit" className="btn btn-default btn-success" value="Add" onChange={this.handleSub}/>
            </form>
          </div>
        </div>
        <div className="col-md-6 col-md-offset-3">
          <h1 className="text-center">Favorite Movies</h1>
          <table className="table table-striped table-hover">        
            <thead>
              <tr>    
                <th>Movie Title</th>
                <th>Duration</th>
                <th>Release Date</th>
                <th></th>
              </tr>
              <tr>
                <td><input type="text" className={this.state.cssClass} id="title2" placeholder="title.." value={this.state.title2} onChange={this.handleTitleEdit}/></td>
                <td><input type="text" className={this.state.cssClass} id="duration2" placeholder="in hours.." value={this.state.duration2} onChange={this.handleDurationEdit}/></td>
                <td><input type="text" className={this.state.cssClass} id="year2" placeholder="year.." value={this.state.year2}  onChange={this.handleYearEdit}/></td>
                <td><button className={this.state.cssClass  + ' btn btn-xs btn-success' } onClick={() => this.handleEdit(this.state.index)}>
                      <span className="glyphicon glyphicon-ok"></span>
                    </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {this.state.listaPelis.map((movie, number) => {
                return(  
                      <tr key={number}>
                        <td>{movie.title}</td>
                        <td>{movie.duration}</td>
                        <td>{movie.year}</td>
                        <td><button className="btn btn-xs btn-info" onClick={() => this.handleAdd(number)}>
                              <span className="glyphicon glyphicon-pencil"></span>
                            </button>
                            <button className="btn btn-xs btn-danger" onClick={() => this.handleDelete(number)}>
                              <span className="glyphicon glyphicon-trash"></span>
                            </button>
                        </td>
                      </tr>                  
                )
              })} 
            </tbody>      
          </table>
        </div>
      </div>
    );
  }
}


// ========================================


ReactDOM.render(
  <Formu  />,
  document.getElementById('root')
);