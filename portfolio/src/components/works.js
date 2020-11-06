import React from "react";

import Card from "./card";
import projects from "../data/projects";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="showcase">
        <ul>
          <li className="showC">
            <h2>Work showcase</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
              ultrices eget turpis scelerisque eu libero euismod fringilla
              integer. Viverra sit vestibulum morbi mattis malesuad
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
