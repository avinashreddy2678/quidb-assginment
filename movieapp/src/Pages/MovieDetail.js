import React from "react";
import { useLocation } from "react-router-dom";
import MovieSummary from "../Components/MovieSummary";

const MovieDetail = () => {
  const { state } = useLocation();
  const { movie } = state;

  // getting and passing  the movie data to teh movie summary component as a props
  return (
    <div>
      <MovieSummary movie={movie}/>
    </div>
  );
};

export default MovieDetail;
