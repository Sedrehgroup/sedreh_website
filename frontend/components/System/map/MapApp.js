import React from "react";
import { useSelector } from "react-redux";

import Mapbox from "./MapBox";
import Navbar from "../navbar/Navbar";
import RightPanel from "../panel/RightPanel";
import Compare from "./Compare";
const MapApp = () => {
  const buttonCompare = useSelector((state) => state.map.buttonCompare);

  return (
    <div>
      <Navbar />
      <RightPanel />
      {buttonCompare ? <Compare /> : <Mapbox />}
      {/* <Mapbox /> */}
    </div>
  );
};

export default MapApp;
