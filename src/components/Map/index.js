import React from "react";

const Map = ({ mapName, src }) => {
  const styles = {
    height: "70vw", 
    backgroundImage: `url(${src})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center"
  }
  return (
    <div id={`${mapName}-map-paper`} className="p-3 bg-warning my-3">
      <h1>{mapName}</h1>
      <div className="map" style={styles}></div>
    </div>
  );
};

export default Map;
