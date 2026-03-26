import "./Home.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Statistics from "./Components/Statistics/Statistics";
import ExploreLC from "./Components/ExploreLC/ExploreLC";
import Team from "./Components/Team/Team";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";



function Home() {
  return (
    <div className="appWrapper">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Statistics />
      <ExploreLC />
      <Team />
      <Connect />
      <Footer />
    </div>
  );
}

export default Home;
