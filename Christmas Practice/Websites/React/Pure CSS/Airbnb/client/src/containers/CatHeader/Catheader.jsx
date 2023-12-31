import React from 'react'
import './styles.css'
import Categories from '../../components/Categories/Categories'
import Filters from '../../components/Filters/Filters'
import DisplayTotalTax from '../../components/DisplayTotalTax/DisplayTotalTax'

const Catheader = () => {
    return (
        <div className="catheader">
            <Categories />
            <Filters />
            <DisplayTotalTax />
        </div>
    )
}

export default Catheader