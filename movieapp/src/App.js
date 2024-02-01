import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";
import MovieDetail from "./Pages/MovieDetail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="sticky-nav">
          <Link to="/">
            <h1 className="text-center m-2">Cinemate</h1>
          </Link>
        </nav>
        <Routes>
          <Route path={"/"} element={<MoviePage />} />
          <Route path="/Moviedetail/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
