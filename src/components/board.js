import React, { useState, useEffect } from 'react';
import Card from './card';
import { CardArray } from '../util/CardData';

const GameBoard = ({ updateScore, currentScore, updateHighScore, currentHighScore }) => {
    
    const [deck, setDeck] = useState(CardArray);
    const [clickedCards, setClickedCards] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);

    const randomizeCards = () => {
        let deckCopy = [...deck];
        for (let i = deckCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = deckCopy[i];
            deckCopy[i] = deckCopy[j];
            deckCopy[j] = temp;
        }
        setDeck(deckCopy)
    }

    //Shuffles the deck every time component is mounted (whenever the site is opened)
    useEffect(() => {
        randomizeCards();
    }, [])


    useEffect(() => {
        if (currentScore > 11) {
            //win game 
            //add dom effect
            console.log("Winner")
            resetGame();
        }
    }, [currentScore])


    useEffect(() => {
        if (isGameOver) {
            resetGame();
        }
    }, [isGameOver])


    const checkclickage = (cardId) => {
        randomizeCards()
        if (clickedCards.includes(cardId)) {
            setIsGameOver(true);
        } else {
            updateScore(currentScore+1)
            setClickedCards(prev => [...prev, cardId]);
        }
    }

    const resetGame = () => {
        handleHighScore();
        updateScore(0);
        setClickedCards([]);
        setIsGameOver(false);
    }

    const handleHighScore = () => {
        if (currentHighScore < currentScore) {
            updateHighScore(currentScore)
        }
    }

    return (
        <div className='game-board'>
            {deck.map((card) => 
                <Card 
                  emperor={card}
                  key={card.id}
                  handleClick={() => checkclickage(card.id)}
                />
            )}
        </div>
    )
}

export default GameBoard;