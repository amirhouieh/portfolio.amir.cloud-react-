import React from "react"
import {Link, Router} from "react-static"
import {hot} from "react-hot-loader"

import Routes from "react-static-routes"

import "./base.css";
import "./app.css";
import {BlurText} from "./components/blur-text";

const App = () => (
    <Router>
        <div>
            <BlurText fontSize={50} color={"blue"}>
                <Link to={`/`}>
                    <h2 className="page-info">/</h2>
                </Link>
            </BlurText>
            <br/>
            <br/>
            <br/>
            <br/>
            <Routes/>
        </div>
    </Router>
)


export default hot(module)(App)
