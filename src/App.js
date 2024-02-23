import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Components
import AddDoctors from "./pages/AddDoctors/page";
import Appointments from "./pages/Appointments/page";
import CreateAppointment from "./pages/CreatAppointments/page";
import Dashboard from "./pages/Dashboard/page";
import Departments from "./pages/Departments/page";
import Doctors from "./pages/Doctors/page";
import DoctorsDynamic from "./pages/DoctorsDynamic/page";
import Home from "./pages/Home/page";
import Login from "./pages/Login/page";
import Patients from "./pages/Patients/page";

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
           <Route  path="/AddDoctors" element={<AddDoctors/>}/>
           <Route  path="/Doctors" element={<Doctors/>}/>
           <Route  path="/Patients" element={<Patients/>}/>
           <Route  path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
