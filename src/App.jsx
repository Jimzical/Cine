import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/Navbar.jsx";

function App() {
  const [search, setSearch] = useState('');

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  return (
    <Router>
      <NavBar />    
      <div className="container text-center">
        <br/>
        <br/>
        <form onSubmit={handleFormSubmit} className="input-group mb-3">
          <input type="text" className="form-control" placeholder='Search for Movie Recommendations' aria-label="Search" aria-describedby="button-addon2" value={search} onChange={handleInputChange} />
          <button className="btn btn-primary" type="submit" id="button-addon2" style={{width: '150px'}}>Search</button>
        </form>
        <p className="mt-4 lead fs-2 "><span >Searching for:</span> {search}</p>
      
      </div>
    </Router>
  );
}

export default App;