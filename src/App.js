import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


// Images
import Appointments from "./pages/Appointments/page";
import CreateAppointment from "./pages/CreatAppointments/page";
import Doctors from "./pages/Doctors/page";
import Home from "./pages/Home/page";
import Login from "./pages/Login/page";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login/>}/>
           <Route  path="/Home" element={<Home/>}/>
           <Route  path="/Appointments" element={<Appointments/>}/>
           <Route  path="/CreateAppointments" element={<CreateAppointment/>}/>
           <Route  path="/Doctors" element={<Doctors/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
