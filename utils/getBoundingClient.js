import { useState, useEffect } from "react";
import throttle from "lodash/fp/throttle";

export default ref => {
  const [boundingClient, setBoundingClient] = useState(0);

  const handleScroll = throttle(100, () => {
    const boundingClientUpdate = ref.current.getBoundingClientRect();
    setBoundingClient(boundingClientUpdate);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return boundingClient;
};
