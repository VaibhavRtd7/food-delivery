import React from "react";

function About() {
  return (
    <div>
      <h1> About Page </h1>
      <h3> This is about page</h3>

      <div className="max-w-xs">
        <p className="line-clamp-2 overflow-hidden bg-pink-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          euismod metus et nisl pulvinar, vitae tristique metus dictum.
        </p>
        <p className="invisible absolute top-0 left-0 bg-yellow-200 bg-opacity-75 p-2 line-clamp-none transition-opacity ease-in-out duration-300 opacity-0 hover:opacity-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          euismod metus et nisl pulvinar, vitae tristique metus dictum.
        </p>
      </div>
    </div>
  );
}

export default About;
