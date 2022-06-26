import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Inventory from "./pages/Inventory";
import MedicalRecord from "./pages/MedicalRecord";
import Finance from "./pages/Finance";
import HumanResource from "./pages/HumanResource"
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
      <SidebarLeft />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='/service' element={<Service />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/medical-record' element={<MedicalRecord />} />
            <Route path='/finance' element={<Finance />} />
            <Route path='/hr' element={<HumanResource />} />
          </Route>
        </Routes>
        <SidebarRight />
      </BrowserRouter>
    </div>
  );
}

export default App;
