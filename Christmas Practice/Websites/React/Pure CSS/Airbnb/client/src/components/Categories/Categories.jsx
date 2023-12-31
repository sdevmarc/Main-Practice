import React from 'react'
import './styles.css'
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
import { GiFarmTractor } from "react-icons/gi";
import { IoBoatSharp } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { MdOutlinePool } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsTropicalStorm } from "react-icons/bs";
import { MdHouseboat } from "react-icons/md";
import { MdCabin } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { GiTreehouse } from "react-icons/gi";
import { GiMushroomGills } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { GiForestCamp } from "react-icons/gi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { GiFrontalLobe } from "react-icons/gi";

const Categories = () => {
    return (
        <div className="categories">
            <div className="slider">
                <div className="slides">
                    <div className="image">
                        <FaUmbrellaBeach />
                    </div>
                    <div className="title">
                        Beachfront
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <MdOutlineRoomService />
                    </div>
                    <div className="title">
                        Rooms
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <GiFarmTractor />
                    </div>
                    <div className="title">
                        Farms
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <IoBoatSharp />
                    </div>
                    <div className="title">
                        Boats
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <IoBed />
                    </div>
                    <div className="title">
                        Bed & Breakfasts
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <MdOutlinePool />
                    </div>
                    <div className="title">
                        Amazing pools
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <FaUsersViewfinder />
                    </div>
                    <div className="title">
                        Amazing views
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <BsTropicalStorm />
                    </div>
                    <div className="title">
                        Tropical
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <MdHouseboat />
                    </div>
                    <div className="title">
                        Houseboats
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <MdCabin />
                    </div>
                    <div className="title">
                        Cabins
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <IoIosHome />
                    </div>
                    <div className="title">
                        Tiny homes
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <GiTreehouse />
                    </div>
                    <div className="title">
                        Treehouses
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <GiMushroomGills />
                    </div>
                    <div className="title">
                        OMG!
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <FaSkiing />
                    </div>
                    <div className="title">
                        Skiing
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <GiForestCamp />
                    </div>
                    <div className="title">
                        Camping
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <FaArrowTrendDown />
                    </div>
                    <div className="title">
                        Trending
                    </div>
                </div>
                <div className="slides">
                    <div className="image">
                        <GiFrontalLobe />
                    </div>
                    <div className="title">
                        Lakefront
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories