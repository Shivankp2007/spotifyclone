import React from "react";
import Home from "../Components/Middle/Images/Home.png";
import Search from "../Components/Middle/Images/Search.png";
import YourLibrary from "../Components/Middle/Images/YourLibrary.png";
import ThreeDot from "../Components/Middle/Images/ThreeDot.svg";
import LikedSongs from '../Components/Middle/Images/LikedSongs.png'
import {Link} from 'react-router-dom'

function SideNav() {
  return (
    <div className="SideNav">
      <div className="top-SideNav">
        <div className="top-SideNav-item3">
          <img src={ThreeDot} alt="" className="ThreeDot" />
        </div>
        <div className="top-SideNav-item-1">
          <div className="top-SideNav-item">
            <Link to="/"><img src={Home} alt="" className="SideNav-img" /><text>Home</text> 
            
            </Link>
          </div>
          <div className="top-SideNav-item">
            <Link to="/search">
              <img src={Search} alt="" className="SideNav-img" />
              <text>Search</text>
            </Link>
          </div>
          <div className="top-SideNav-item">
            <a href="/yourlibrary">
            <img src={YourLibrary} alt="" className="SideNav-img" />
            <text>Your Library</text>
            </a>
          </div>
        </div>
        <div className="top-SideNav-item-2">
          <div className="top-SideNav-item">
            <img src={Home} alt=""  />
            Home
          </div>
          <div className="top-SideNav-ite">
            <div className="sidenavimg">
            <img src={LikedSongs} alt=""  />
            </div>
            <div className="te">Home</div>
            
          </div>
        </div>
      </div>
      <div className="Sep"></div>
      <div className="bottom-SideNav">
        <ul>
          <a href="">
            <li>Pop Mix</li>
          </a>
          <a href="">
            <li>Beat</li>
          </a>
          <a href="">
            <li>OLD Songs</li>
          </a>
          <a href="">
            <li>My Playlist</li>
          </a>
          <a href="">
            <li>Pop Mix</li>
          </a>
          <a href="">
            <li>Pop Mix</li>
          </a>
          <a href="">
            <li>Pop Mix</li>
          </a>
          <a href="">
            <li>Pop Mix</li>
          </a>
          <a href="">
            <li>Pop Mix</li>
          </a>
          <a href="">
            <li>Pop Mix</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
