import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import Category from "./sidebar/Category.js";
import ItemsBlock from "./items-block/Items-block.js";

const Motto = () => (
    <div className="motto">
        This is the first website where things can have a second life!Don't waste your food, clothes,toys, furnitures, just let them know you're giving away!
    </div>
);

const Main = () => (
    <div>
        <Motto />
        <div className="main-content">
            <div className="sidebar">
                <Category />
            </div>
            <div className="items-block">
                <ItemsBlock />
            </div>
            
        </div>
       
    </div>
); 
export default hot(module)(Main);