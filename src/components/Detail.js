import { Link } from "react-router-dom";
import "./Detail.css";

function Detail(props) {
  const { year, title, summary, poster, genres } = props.location.state;

  return (
    <div className="detail__container">
      <img src={poster} className="img" />
      <div className="detail__explain">
        <h3 className="detail__title">{title}</h3>
        <h4 className="detail__genres">
          {genres.map((gener, index) => {
            return (
              <li className="genres__gener" key={index}>
                {gener}
              </li>
            );
          })}
        </h4>
        <h4 className="detail__genres">createdAt : {year}</h4>
        <p>{summary}</p>
      </div>
      <Link to="/">
        <span className="detail__backtoHome">영화 목록으로 돌아가기</span>
      </Link>
    </div>
  );
}

export default Detail;
