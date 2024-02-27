
import React from 'react';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  const { Title, Plot, Images, imdbRating,Year,Genre,Actors,Language} = movie;
  console.log(movie)

  return (
    <>

  {/* #CodePenChallenge: Reflections */}
  <div className="top">
    <div className="columns">
      <div className="column is-full featured_wrapper p-0">
        <img src={Images} className="featured" />
        <div className="title_wrapper">
          <span className="has-text-white">Trending Today</span>
          <h1 className="title is-1 has-text-white">
         {Title}
          </h1>
          <h2 className="title is-2 has-text-white">Discreption : {Plot}</h2>
          <h2 className="title is-3 has-text-white">Rating : {imdbRating}</h2>
          <h2 className='title is-4 has-text-white'> Since : {Year}</h2>
          <h3 className="title is-5 has-text-white">Genre : {Genre}</h3>
          <h3 className="title is-6 has-text-white">Actors : {Actors}</h3>
          <h3 className="title is-7 has-text-white">Language : {Language}</h3>
          <button className="button is-medium">Watch It Now</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="columns is-multiline p-0 pt-6 last">
      <div className="column is-full">
        <p className="has-text-white">Action Movies Collection</p>
      </div>
      <div className="column is-one-quarter">
        <img src={Images[1]} />
      </div>
      <div className="column is-one-quarter">
        <img src={Images[2]} />
      </div>
      <div className="column is-one-quarter">
        <img src={Images[3]} />
      </div>
      
    </div>
    
    
  </div>
</>

  );
};

export default MovieCard;
