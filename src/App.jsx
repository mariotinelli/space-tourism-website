import Home from "./components/pages/Home"
import GlobalStyle from "./globalStyles"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Moon from "./components/pages/Destinations/Moon";
import Mars from "./components/pages/Destinations/Mars";
import Europa from "./components/pages/Destinations/Europa";
import Titan from "./components/pages/Destinations/Titan";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations/moon" element={<Moon />} />
            <Route path="/destinations/mars" element={<Mars />} />
            <Route path="/destinations/europa" element={<Europa />} />
            <Route path="/destinations/titan" element={<Titan />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
