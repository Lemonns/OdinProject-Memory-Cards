import React from 'react';

const Card = ({ emperor, handleClick }) => {
    return (
        <div onClick={handleClick} className="emporer-card" name={emperor.id} key={emperor.id}>
            <img src={emperor.image} className="emperor-img" alt='roman emporor named {emperor.name}'/>
            <h3>{emperor.name}</h3>
        </div>
    )
}

export default Card;