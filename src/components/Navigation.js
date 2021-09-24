import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <section className="title">
      <Link to="/">
        <button className="button__option">Home</button>
      </Link>
    </section>
  );
}

export default Navigation;
