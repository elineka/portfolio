import Svg from "./svg";
import { FaAngleDoubleDown } from "react-icons/all"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="desc">
          <h1>Hello,meet Elineka Maleo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ultrices
            eget turpis scelerisque eu libero euismod fringilla integer. Viverra
            sit vestibulum morbi mattis malesuada.{" "}
          </p>
          <a href="#works" className="btn-primary">See the works</a>
        </div>
        <div className="svg">
          <Svg/>
        </div>
        <a className="icon" href="#works">
        <FaAngleDoubleDown />
        </a>
      </div>
    </div>
  );
};

export default Hero;
