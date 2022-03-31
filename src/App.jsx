import Home from "./components/pages/Home"
import GlobalStyle from "./globalStyles"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";
import Destinations from "./components/pages/Destinations";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
