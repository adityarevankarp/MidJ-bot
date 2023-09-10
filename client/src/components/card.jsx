import React from "react";
import { download } from "../assets";
import { downloadimage } from "../utils";
const card = (_id, name, prompt, photo) => {
  return (
    <div className="rounded-xl froup relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      ></img>
    </div>
  );
};

export default card;
