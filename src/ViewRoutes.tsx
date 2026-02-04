import { Routes, Route } from "react-router";

import Home from "./components/Home";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Contacts from "./components/Contacts";

const ViewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default ViewRoutes;
