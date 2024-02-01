import React from "react";
import BookingMovie from "./BookingMovie";
import { useNavigate } from "react-router-dom";

// props movie
const MovieSummary = ({ movie }) => {
  const navigate = useNavigate();

  // checking if dont ahve any imnage we are giving default image
  const imageurl = movie?.show?.image?.original
    ? movie.show.image.original
    : "https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk=";
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-secondary m-5"
      >
        back
      </button>
      <div className="card mb-3 mt-5 m-auto" style={{ maxWidth: "740px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageurl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie?.show?.name}</h5>
              <div
                dangerouslySetInnerHTML={{ __html: movie?.show?.summary }}
                className="mt-4"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <BookingMovie movie={movie.show.name} />
      </div>
    </div>
  );
};

export default MovieSummary;
