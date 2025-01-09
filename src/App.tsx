import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./pages/Home";

export default function App() {

  // Execute Locomotive Scroll
  new LocomotiveScroll({
    lenisOptions: {
      orientation: 'horizontal',
      gestureOrientation: 'horizontal',
    },
  });

  // Window Scroll
  useEffect(() => {
    const scrollX = document.querySelector('.custom-scroll');
    if (scrollX) return window.addEventListener('wheel', (event) => {
      scrollX.scrollLeft += event.deltaY * .7;
      scrollX.scrollLeft += event.deltaX * .7;
    });
  }, []);

  return <Home />
}