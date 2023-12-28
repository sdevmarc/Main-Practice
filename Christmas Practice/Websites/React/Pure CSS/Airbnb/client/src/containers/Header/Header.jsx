import React from 'react'
import './styles.css'
import { RiGlobalLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="top">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
                </div>
                <div className="navs">
                    <nav>
                        <Link>Stays</Link>
                        <Link>Experiences</Link>
                        <Link>Online Experiences</Link>
                    </nav>
                </div>
                <div className="right">
                    <div className="home">
                        Airbnb your home
                    </div>
                    <div className="global">
                        <RiGlobalLine />
                    </div>

                    <div className="hamburger">
                        <IoIosMenu />
                        <div className="profile">
                            <img src="https://source.unsplash.com/shallow-focus-photography-of-woman-outdoor-during-day-rDEOVtE7vOs" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="destination">
                    <div className="title">
                        Where
                    </div>
                    <input type="text" placeholder='Search Destination' />
                </div>
                <div className="check-in">
                    <div className="title">
                        Check in
                    </div>
                    <input type="date"/>
                </div>
                <div className="check-out">
                    <div className="title">
                        Check out
                    </div>
                    <input type="date" />
                </div>
                <div className="who">
                    <div className="title">
                        Who
                    </div>
                    <input type="text" placeholder='Add guests' />
                </div>
            </div>

        </div>
    )
}

export default Header