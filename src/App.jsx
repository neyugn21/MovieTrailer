import { Fragment, useEffect, useState } from "react";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import MovieList from "./Component/MovieList";
import axios from "axios";
import SearchMovie from "./Component/SearchMovie";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const handleSearch = async (searchValue) => {
    setMovieSearch([]);
    try {
      // const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`;
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`;
      const options = {
        // method: 'GET',
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const { data } = await axios.get(url, options);
      console.log(data.results);
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const url1 = "https://api.themoviedb.org/3/trending/tv/day?language=vi";
      const url2 =
        "https://api.themoviedb.org/3/tv/top_rated?language=vi&page=1";
      const options = {
        // method: 'GET',
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      // const { data } = await axios.get(url, options);
      const [res1, res2] = await Promise.all([
        axios.get(url1, options),
        axios.get(url2, options),
      ]);

      setMovieList(res1.data.results);
      setMovieRate(res2.data.results);

      // console.log(res1.data.results);
      // console.log(res2.data.results);
    };

    getData();
  }, []);
  return (
    <Fragment>
      <MovieProvider>
        <div className="bg-black pb-10">
          <Header handleSearch={handleSearch} />
          <Banner />
          {movieSearch.length > 0 ? (
            <SearchMovie title={"Kết quả tìm kiếm"} data={movieSearch} />
          ) : (
            <>
              <MovieList title={"Phim Hot"} data={movieList} />
              <MovieList title={"Phim Đề Cử"} data={movieRate} />
            </>
          )}
        </div>
      </MovieProvider>
    </Fragment>
  );
}

export default App;
