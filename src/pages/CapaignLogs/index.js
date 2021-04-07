import React from "react";
import Log from "../../components/CampaignLog"

const Logs = () => {
  return <>
  <div id="log-container" className="container bg-danger">
    <Log logName="Calm at Neverwinter" logDate="00-00-0000"/>
    <Log logName="Ubbin Falls and More" logDate="00-00-0000"/>
    <Log logName="Session Zero" logDate="00-00-0000"/>
  </div>
  </>;
};

export default Logs;
