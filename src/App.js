import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext } from "react";

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Events from "./pages/Events/Events";
import Playpark from "./pages/Playpark/Playpark";
import Faq from "./pages/Faq/Faq";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import ParkRules from "./pages/ParkRules/ParkRules";
import Daycare from "./pages/Daycare/Daycare";
import Contact from "./pages/Contact/Contact";

export const GraphqlContext = createContext();

export const App = function () {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/daycare" element={<Daycare />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/parkrules" element={<ParkRules />} />
        <Route path="/playpark" element={<Playpark />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
};
