import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useContext } from 'react';
import ReactDOM from "react-dom";
import Section1 from "./components/section-1";
import section3 from "./components/section-3";
import section2 from "./components/section-2";
import Homepage from "./pages/Homepage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Meetpage from "./pages/meetpage";

export const UserContext = createContext()

function App() {
    
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/section1" element={<Section1/>} />
                <Route path="/section3" element={section3} />
                <Route path="/section2" element={section2} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/meet" element={<Meetpage/>} />

                
            </Routes>
        </Router>

    );
}

export default App