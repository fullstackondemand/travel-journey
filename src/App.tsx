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

  return <Home />
}