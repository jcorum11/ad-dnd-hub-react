import React from "react";
import Map from "../../components/Map";

const Maps = () => {
  return (
    <div id="map-container" className="container">
      <Map mapName="Oakhurst" src="/oakhurst-map.jpg" />
      <Map mapName="Ubbin Falls" src="/hh.jpeg" />
      <Map mapName="Neverwinter" src="/nw.png"/>
      <Map mapName="Sword Coast" src="/sc.jpeg"/>
    </div>
  );
};

export default Maps;
