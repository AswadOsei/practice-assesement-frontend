import React from "react";
import { Link } from "react-router-dom";
import("./styles.css");
export default function SpaceBlock(props) {
  return (
    <div>
      <div className="space-block" id={props.id}>
        <h4>{props.title} </h4>
        <p> {props.description}</p>
        <button className="button">
          <Link to={`/${props.id}`}>Visit Space</Link>
        </button>
      </div>
    </div>
  );
}
