import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App" >
            <Router>
                <Header/>
                <Content/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
