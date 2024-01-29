import React, { Component } from 'react'

export default class Popular extends Component {
  render() {
    function getData() {
      const data = {
        "query": "spdman",
        "matched_title": "spider man",
        "recommendations": [
            {
            "id": 557,
            "original_title": "spider man"
            },
            {
            "id": 559,
            "original_title": "spider man 3"
            },
            {
              "id": 557,
              "original_title": "spider man"
              },
              {
              "id": 559,
              "original_title": "spider man 3"
            },
            {
              "id": 557,
              "original_title": "spider man"
              },
              {
              "id": 559,
              "original_title": "spider man 3"
            },
            {
              "id": 557,
              "original_title": "spider man"
              },
              {
              "id": 559,
              "original_title": "spider man 3"
            },
            {
              "id": 557,
              "original_title": "spider man"
              },
              {
              "id": 559,
              "original_title": "spider man 3"
            },
            {
              "id": 557,
              "original_title": "spider man"
              },
              {
              "id": 559,
              "original_title": "spider man 3"
            },
            {
            "id": 102382,
            "original_title": "the amazing spider man 2"
            }
            
        ]
      };
      return data;
    };
    const data = getData();

    return (
      <div className="container d-flex justify-content-center" style={{ paddingTop: '10vh' }}>
        <div className="row">
          {data.recommendations.map((movie, index) => (
            <div key={index} className="col-sm-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <img src="https://picsum.photos/200" alt="Card cap" className="card-img-top" />
                  <h5 className="card-title" style={{paddingTop: '2vh'}}>{movie.original_title}</h5>
                  <p className="card-text">ID: {movie.id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}