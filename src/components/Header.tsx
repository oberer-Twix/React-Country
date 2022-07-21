import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return <div style={{
        width: "calc(100vw - 4rem)",
        height: "4rem",
        borderBottom: "2px grey solid",
        display: "flex",
        flex: "row",
        justifyContent: "space-evenly",
    }}>
        <Link to="/countries"><h1 style={{fontWeight: "bold"}}>Countries</h1></Link>
        <Link to="/about"><h1 style={{fontWeight: "bold"}}>About</h1></Link>
    </div>

}