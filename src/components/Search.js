import React, { useState } from "react";
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
//import MicIcon from '@mui/icons-material/Mic';
import MicIcon from '@mui/icons-material/Mic';
//import Button from '@mui/material/Button';
//import { useHistory } from "react-router-dom";
//import { useStateValue } from "../StateProvider";
//import { actionTypes } from "../reducer";

function Search () {

    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                    <input/>
                <MicIcon />
            </div>
        </div> //was form
    )
}

export default Search