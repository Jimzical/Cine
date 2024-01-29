import React, { Component } from 'react';
import axios from 'axios';

export default class Popular extends Component {
  state = {
    movies: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/popular?sortby=score&limit=10');
      this.setState({ movies: response.data.movies, loading: false });
      console.log(response.data.movies);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
          <div className="spinner-border text-primary" role="status" style={{width: '3rem', height: '3rem'}}>
          </div>
        </div>
      );   
    }
    return (
      <div className="container mt-5">
        <div className='text-center mb-5 lead display-4'>Popular</div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {movies.map((movie, index) => (
            <div key={index} className="col mb-4">
              <div className="card">
              <img src={`https://picsum.photos/200?random=${index}`} alt="Card cap" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    <span style={{ textTransform: 'capitalize' }}>{movie.title}</span>
                    <span>{movie.id}⭐</span>                    
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}