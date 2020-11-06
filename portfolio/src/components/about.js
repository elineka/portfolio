import img from "../images/flower1.jpg";
import { HiOutlineCode, GiPencilBrush } from "react-icons/all"

let services = [
  {
    id:1,
    title: "Web Design",
    descr: "This is Maleo Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ultrices eget turpis scelerisque eu libero euismod fringilla integer.",
    icon: <HiOutlineCode className="icon" />
  },
  {
    id:2,
    title: "Web Development",
    descr: "This is Maleo Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ultrices eget turpis scelerisque eu libero euismod fringilla integer.",
    icon: <GiPencilBrush className="icon" />
  }
]

const About = () => {
  return (
    <div className="about" id="about">
      <div className="abtdetail">
      <div className="container">
        <h1><span></span>About me</h1>
        <section className="showcase">
          <div className="abtdetail">
            <p>
            
              This is Maleo Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. At ultrices eget turpis scelerisque eu libero euismod
              fringilla integer. Viverra sit vestibulum morbi mattis malesuada.
              Faucibus volutpat lobortis odio placerat aliquam laoreet sed. Diam
              congue arcu nisi, amet, at a.
            </p>
          </div>
          <div className="abtpic">
            <img src={img} alt="Neka" />
          </div>
        </section>
        </div>
      </div>
      <div className="tools">
        <h2>Tools I use</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScipt</li>
        </ul>
      </div>
      <div className="skills">
        <ul>
          {services.map(({id, title, descr, icon}) => (
            <li key={id}>
             <span>{icon}</span> 
          <h3>{title}</h3>
            <p className="skillabt">
              {descr}
            </p>
          </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default About;
