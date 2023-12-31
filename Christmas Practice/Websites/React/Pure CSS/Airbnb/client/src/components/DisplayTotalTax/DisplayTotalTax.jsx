import React from 'react'
import './styles.css'
import { MdOutlineToggleOff } from "react-icons/md";

const DisplayTotalTax = () => {
    return (
        <>
            <div className="displaytax">
                <div className="title">
                    Display total before taxes
                </div>

                <div className="displaytax-icon">
                    <MdOutlineToggleOff />
                </div>
            </div>
        </>
    )
}

export default DisplayTotalTax