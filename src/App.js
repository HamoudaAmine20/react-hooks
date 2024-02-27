import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import moviesData from './movies.json'

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const filteredMovies = movies;

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter handleTitleChange={handleTitleChange} handleRatingChange={handleRatingChange} />
      <MovieList movies={movies} />
     
    </div>
  );
};

export default App;


