import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {

    const cardComponent = robots.map((currVal, i) => {
        return (
            <Card 
                key={i} // each child in react array needs unique key prop
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                />
        )
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList