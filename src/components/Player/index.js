import React from "react";

const Player = ({playerName}) => {
  return (
    <div id={`${playerName}-card-paper`} className="bg-warning p-3 my-3">
      <h1>{playerName}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        suscipit amet, voluptatem officia, eveniet quidem nisi iste iusto
        necessitatibus repudiandae voluptate modi quod. Facere sunt quisquam eos
        possimus optio molestias.
      </p>
    </div>
  );
};

export default Player;
