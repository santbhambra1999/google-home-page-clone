import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"
//import AppsIcon from '@mui/icons-material/Apps';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from "@mui/material";
import  Search  from "../components/Search";

function Home() {
    return (
        <div className="home">
             
            <div className="home__header"> {/* top part (about, store, gmail, images, logos )*/}
                <div className="home__headerLeft"> {/* about & store */}
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                
                <div className="home__headerRight"> {/* gmail, images & logos */}
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>


            <div className="home__body"> {/* google logo, search bar, google search, im feeling lucky */}
                <img src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />

                <div className="home__inputContainer">
                    <Search hideButtons />
                </div>
            </div>

        </div>
    )
}

export default Home