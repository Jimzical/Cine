import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/movies')
            .then(response => {
                console.log(response.data);
                setMovieList(response.data.movies);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div>
            {movieList.map((movie, index) => (
                <div key={index}>{movie}</div>
            ))}
        </div>
    );
}

export default Login;