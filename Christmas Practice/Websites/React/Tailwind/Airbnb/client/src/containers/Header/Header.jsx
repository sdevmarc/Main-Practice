import React from 'react'
import Middle from '../../components/Header/Middle/Middle'

const Header = () => {
    return (
        <>
            <div className="h-[9vh] flex items-center px-40 py-0">
                <div className="w-full flex justify-between items-center">
                    <div className="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" className='w-[9rem]' alt="" />
                    </div>
                    <Middle />
                </div>
            </div>
        </>
    )
}

export default Header