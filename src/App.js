import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


// Images
import Appointments from "./pages/Appointments/page";
import CreateAppointment from "./pages/CreatAppointments/page";
import Departments from "./pages/Departments/page";
import DoctorsDynamic from "./pages/DoctorsDynamic/page";
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
           <Route  path="/CreatAppointments" element={<CreateAppointment/>}/>
           <Route  path="/DoctorsDynamic" element={<DoctorsDynamic/>}/>
           <Route  path="/Departments" element={<Departments/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
