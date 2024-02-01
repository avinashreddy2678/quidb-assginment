import React, { useState } from "react";

// we get only movie name as props
const BookingMovie = ({ movie }) => {
  const [showform, setshowform] = useState(false);
  const [userDetail, setuserDetails] = useState({
    name: "",
    email: "",
  });
  const handlechange = (e) => {
    setuserDetails({ ...userDetail, [e.target.name]: e.target.value });
  };
  //  on submit the book btn
  const handlesubmit = (e) => {
    e.preventDefault();
    let bookingDetail = {
      movieName: movie,
      user: userDetail,
    };
    let localstorageMovieData = localStorage.getItem("MovieDetails");
    if (!localstorageMovieData) {
      // if localstoreage is empty
      localStorage.setItem("MovieDetails", JSON.stringify([bookingDetail]));
    } else {
      // if ticekt are already booked for other
      let parseData = JSON.parse(localstorageMovieData);
      let newArray = [...parseData, bookingDetail];
      localStorage.setItem("MovieDetails", JSON.stringify(newArray));
    }
    setuserDetails({
      name: "",
      email: "",
    });
    alert(`You Ticket for ${movie} booked success`);
    setshowform(false);
  };

  const handlecancel = () => {
    setshowform(false);
    setuserDetails({
      name: "",
      email: "",
    });
  };
  //   console.log(user);
  return (
    <div className="w-50 m-auto">
      {!showform ? (
        <button
          onClick={() => {
            setshowform(true);
          }}
          type="button"
          className="btn btn-primary"
        >
          Book a Ticket Now
        </button>
      ) : (
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Movie
            </label>
            <input
              type="text"
              disabled
              value={movie}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              value={userDetail.email}
              onChange={(e) => {
                handlechange(e);
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              name="name"
              value={userDetail.name}
              onChange={(e) => {
                handlechange(e);
              }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button
            type="button"
            onClick={handlecancel}
            className="btn btn-danger mr-5"
          >
            Cancel
          </button>

          <button type="submit" className="btn ml-4 btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingMovie;
