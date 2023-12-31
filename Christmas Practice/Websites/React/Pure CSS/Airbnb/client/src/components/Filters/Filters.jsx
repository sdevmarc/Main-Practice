import React from 'react'
import { LuSettings2 } from "react-icons/lu";
import './styles.css'

const Filters = () => {
    return (
        <>
            <div className="filters">
                <div className="filter-icon">
                    <LuSettings2 />
                </div>
                <div className="title">
                    Filters
                </div>
            </div>
        </>
    )
}

export default Filters