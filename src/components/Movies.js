import { Link } from "react-router-dom";
import "./Movie.css";

const Movies = ({ id, year, title, summary, poster, genres }) => {
  return (
    <div className="movies__movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <Link
          to={{
            pathname: `/detail/${id}`,
            state: {
              id: id,
              year: year,
              title: title,
              summary: summary,
              poster: poster,
              genres: genres,
            },
          }}
        >
          <h3 className="movie__title">{title}</h3>
        </Link>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((gener, index) => {
            return (
              <li className="genres__gener" key={index}>
                {gener}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
};

export default Movies;
