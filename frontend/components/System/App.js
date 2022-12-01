import { getCookie } from "cookies-next";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Info from "./info/Info";
// import "./app.css";
import MapApp from "./map/MapApp";
import { saveImageHandler, savePolygonHandler } from "./redux/menu";
const App = () => {
  const infoButton = useSelector((state) => state.map.infoButton);
  const dispatch = useDispatch();
  // set initial value of savedPolygons and savedImages
  useEffect(() => {
    return () => {
      if (!!!!getCookie("savedPictures")) {
        dispatch(saveImageHandler(JSON.parse(getCookie("savedPictures"))));
      }
    };
  }, []);
  useEffect(() => {
    return () => {
      if (!!!!getCookie("savedPolygons")) {
        dispatch(savePolygonHandler(JSON.parse(getCookie("savedPolygons"))));
      }
    };
  }, []);
  return <>{infoButton ? <Info /> : <MapApp />}</>;
};

export default App;
