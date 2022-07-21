import React from "react";
import {Route, Routes, Navigate} from "react-router";
import About from "../views/About";
import Countries from "../views/Countries";
import CountryDetails from "../views/CountryDetails";

export default function Content() {
    return <div style={{
        minHeight: "calc(100vh - 11.5rem)",
    }}>
        <Routes>
            <Route path="/" element={<Navigate to="/countries"/>}/>
            <Route path="/countries" element={<Countries/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/CountryDetails/:name" element={<CountryDetails/>}/>
        </Routes>
    </div>;
}