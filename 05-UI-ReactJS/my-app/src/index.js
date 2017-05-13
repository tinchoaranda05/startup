import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      listaPelis : []
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDurationChange = this.handleDurationChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    
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

  handleSub(e){
    this.setState({sub: e.target.value});
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
    
  render(){

    var tabla = {
        class: 'table',
      };
    var boton = {
      class: 'btn-default'
    }

    return(
      <div>
        <div>
          <form  onSubmit={this.handleSubmit}>
            <input type="text" id="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange}/> 
            <input type="text" id="duration" placeholder="Duration" value={this.state.duration} onChange={this.handleDurationChange}/> 
            <input type="text" id="year" placeholder="Year" value={this.state.year}  onChange={this.handleYearChange}/>
            <input type="Submit" value="Add" onChange={this.handleSub}/>
          </form>
        </div>
        <table style={tabla}>        
          <tr>    
            <th>Title</th>
            <th>Duration</th>
            <th>year</th>
          </tr>
          <tbody>
            {this.state.listaPelis.map((movie, number) => {
              return(
                    <tr key={number}>
                      <td>{movie.title}</td>
                      <td>{movie.duration}</td>
                      <td>{movie.year}</td>
                      <td><button style={boton} className="edit" onClick={() => this.handleEdit(number)}>Edit</button></td>
                      <td><button style={boton} className="Del" onClick={() => this.handleDelete(number)}>Delete</button></td>
                    </tr>     
              )
            })} 
          </tbody>      
        </table>
      </div>
    );
  }
}


// ========================================


ReactDOM.render(
  <Formu  />,
  document.getElementById('root')
);