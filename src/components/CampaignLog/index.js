import React from "react";

const Log = ({ logName, logDate }) => {
  return (
    <div id={`${logName}-note-paper`} className="bg-warning p-3 my-3">
      <h1>{logName}</h1>
      <h2>{logDate}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        consectetur aperiam, ipsum, harum sed sint quis ex ea recusandae culpa
        quae iure reiciendis dignissimos est deleniti iusto dolorem impedit qui?
      </p>
    </div>
  );
};

export default Log;
