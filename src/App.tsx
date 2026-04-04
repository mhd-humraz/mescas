import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import EventPage from "./Pages/Events";
import Showcase from "./Pages/ShowcasePage";
import Footer from "./Pages/Components/Footer/Footer";
import Navbar from "./Pages/Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route
  path="/showcase"
  element={
    <>
      <Navbar />
      <Showcase />
      <Footer />
    </>
  }
/>
      </Routes>
    </Router>
  );
}

export default App;