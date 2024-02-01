import React from "react";
import { useNavigate } from "react-router-dom";
const MovieCard = (props) => {
  const navigate = useNavigate();
  const { movie } = props;
// props somplete one movie details
  // if the movie didi n't have any image we are giving the default image
  // on button click it is navigating to summary pag and sending data to that page and also sending movie detals 
  const imageurl = movie?.show?.image?.original
    ? movie.show.image.original
    : "https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk=";
  return (
    <div>
      <div className="card" style={{ width: "18rem", maxHeight: "100%" }}>
        <img src={imageurl} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.show.name}</h5>
          <div className="card-text">
            {
              <p>
                <b>Language</b> : {movie.show.language}
                <br />
                <b>Genres</b> :{" "}
                {movie.show.genres.map((genres, index) => (
                  <span key={index}>{genres},</span>
                ))}
                <br />
                <b>Avg Runtime</b> : {movie.show.averageRuntime}
              </p>
            }
          </div>
          <button
            onClick={() => {
              navigate(`/Moviedetail/${movie.show.id}`, { state: { movie } });
            }}
            type="button"
            className="btn btn-primary"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
