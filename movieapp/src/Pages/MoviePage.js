import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";





// fetch data from api useing axios
// storing that fetched data in a usestate
// sending each movie data to moviecard using map as a props



const MoviePage = () => {
  const [data, setdata] = useState([]);
  const url = "https://api.tvmaze.com/search/shows?q=all";
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(url);
      setdata(res.data);
    };
    fetchdata();
  }, []);
    // console.log(data)
  return (
    <div className="container ">
      <div className="row">
        {data &&
          data.map((movie, index) => (
            <div key={index} className="col mt-5">
              <MovieCard movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
