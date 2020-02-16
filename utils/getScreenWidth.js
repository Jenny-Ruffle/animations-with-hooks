import { useState, useEffect } from "react";
import throttle from "lodash/fp/throttle";

function getWidth() {
  return window.innerWidth;
}

export default () => {
  const [width, setWidth] = useState(0);

  const handleResize = throttle(250, () => {
    setWidth(getWidth());
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWidth(getWidth());
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return width;
};
