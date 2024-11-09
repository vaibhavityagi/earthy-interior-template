import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top
  }, [location]); // Runs every time the location (route) changes

  return null; // No need to render anything
}

export default ScrollToTop;
