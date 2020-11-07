import Svg from "./svg";
import { FaAngleDoubleDown } from "react-icons/all";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="desc">
          <h1>Hello,meet Elineka Maleo</h1>
          <p>
            Web developer, UX/UI designer. I design and build user interface.
            Currently living in Dar es salaam, Tanzania.<br/>
            "Let's make something special".
          </p>
          <a href="#works" className="btn-primary">
            See the works
          </a>
        </div>
        <div className="svg">
          <Svg />
        </div>
        <a className="icon" href="#works">
          <FaAngleDoubleDown />
        </a>
      </div>
    </div>
  );
};

export default Hero;
