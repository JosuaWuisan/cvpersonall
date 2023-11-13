import Slider from "../components/slider";
import About from "../components/about";
import Blog from "../components/blog";
import Service from "../components/service";
import Contact from "../components/contact";

const HomePages = () => {
  return (
    <div>
      <Slider />
      <About />
      <Service />
      <Blog />
      <Contact />
    </div>
  );
};

export default HomePages;
