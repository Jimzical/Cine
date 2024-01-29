import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className='badge fs-3 bg-secondary ms-2 p-3'>CINE Recommender</span>
                    <Link className="navbar-brand ms-4" to="/">Home</Link>
                    <Link className="navbar-brand ms-1" to="/recommend">Recommend</Link>
                    <Link className="navbar-brand ms-1" to="/popular">Popular</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link ms-1" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}