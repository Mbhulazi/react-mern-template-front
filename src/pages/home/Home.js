import { Link } from "react-router-dom";
import "./Hero.scss";
import heroImg from "../../assets/saas-data.PNG";

const Home = () => {
  
  return (
    <div className="home">
      <div className="container">
        <h2>
          <span>Supercharge your SaaS</span>
          <span>With a Fullstack Template!!!</span>
        </h2>
        <p className="hero-text --center-all ">
          This template is the fastest way to build a Saas. Stop wasting time
          with repititive components. Use your Fullstack template!!
        </p>

        <div className="hero-buttons">
          <button className="--btn --btn-primary">
            <Link to="/login">Free Trial 1 Month</Link>
          </button>
          <button className="--btn --btn-secondary">
            <Link to="/">Schedule a Call</Link>
          </button>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
