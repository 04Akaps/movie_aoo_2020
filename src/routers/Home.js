import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../components/Movies";
import "./Home.css";

function Home() {
  const [isLoading, SetIsLoading] = useState(true);
  const [listofmovies, SetListOfMovies] = useState([]);

  //  url에 있는 영화 정보들을 받아오는 방법
  const getMovieslist = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    SetListOfMovies(movies);
    SetIsLoading(false);
  };

  useEffect(() => {
    getMovieslist();
  }, []);
  //  url에 있는 영화 정보들을 받아오는 방법 종료
  return (
    <section className="container">
      {isLoading === true ? (
        <div className="loader">
          <span className="loader__text">"Loading"</span>
        </div>
      ) : (
        <div className="movies">
          {listofmovies.map((mv) => {
            return (
              <Movies
                data={mv}
                key={mv.id}
                id={mv.id}
                year={mv.year}
                title={mv.title}
                summary={mv.summary}
                poster={mv.medium_cover_image}
                genres={mv.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
export default Home;

// .title {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 60px;
// }
