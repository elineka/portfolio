import React from "react";

import Card from "./card";
import projects from "../data/projects";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="showcase">
        <ul>
          <li className="showC">
            <h2>Projects</h2>
            <p>
            I have been constantly working on over the time
            </p>
          </li>
          {projects.map(({ id, name, imgSrc, url, about }) => (
            <Card name={name} id={id} imgSrc={imgSrc} url={url} about={about} key={id}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Works;
