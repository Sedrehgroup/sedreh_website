import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setCookie } from "cookies-next";

const useSavedPolygons = () => {
  const [savedPolygons, setSavedPolygons] = useState([]);
  const _savedPolygons = useSelector((state) => state.menu.savedPolygons);

  useEffect(() => {
    if (_savedPolygons.length > 0) {
      setSavedPolygons(_savedPolygons);
      setCookie("savedPolygons", _savedPolygons, {
        sameSite: "none",
        secure: true,
      });
    }
  }, [_savedPolygons]);
  return [savedPolygons];
};

export default useSavedPolygons;
