import React, { Component} from "react";
import {hot} from "react-hot-loader";

// Banner component
const Banner = () => (
    <div className="banner">
        <h1> clean app! </h1>
        <h2>why wasting when you can share?!</h2>
        <div className="PinkCircle"></div>
        <div className="BlueCircle"></div>
        <div className="YellowCircle"></div>
    </div>   
);

export default hot(module)(Banner);