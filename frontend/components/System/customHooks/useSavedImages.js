import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setCookie } from "cookies-next";

const useSavedImages = () => {
  const [saveImages, setSavedImages] = useState([]);
  const _saveImages = useSelector((state) => state.menu.saveImages);

  useEffect(() => {
    if (_saveImages.length > 0) {
      setSavedImages(_saveImages);
      setCookie("savedPictures", _saveImages, {
        sameSite: "none",
        secure: true,
      });
    }
  }, [_saveImages]);
  return [saveImages];
};

export default useSavedImages;
