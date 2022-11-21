import React, { useState, useEffect } from 'react';

const ScoreBoard = ({ currentScore, currentHighScore }) => {
    return(
        <div className='header-score'>
            <h1>Roman Emperor Memory Cards</h1>
            <div className='scores'>
                <p>Score: {currentScore}</p>
                <p>Highscore: {currentHighScore}</p>
            </div>
        </div>
    )
}

export default ScoreBoard;