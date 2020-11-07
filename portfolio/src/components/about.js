import img from "../images/flower1.jpg";
import { HiOutlineCode, GiPencilBrush } from "react-icons/all"

let services = [
  {
    id:1,
    title: "Web Design",
    descr: "UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience",
    icon: <HiOutlineCode className="icon" />
  },
  {
    id:2,
    title: "Web Development",
    descr: " building out the visual components of a website. Using HTML, CSS , and Javascript, ReactJS, PHP and MYSQL I build fast, interactive websites.",
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
            
            I am Elineka Maleo, transforming web designs into fully functioning,
       interactive websites. Likes exploring as much as possible about 
       the world wide web and how it can be more productive for us all.
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
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScipt</li>
          <li>ReactJS</li>
          <li>Angular</li>
          <li>Sass</li>
          <li>ExpressJS</li>
          <li>MYSQL</li>
          <li>PHP</li>
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
