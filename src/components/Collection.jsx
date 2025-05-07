import { React, useEffect, useState } from 'react'
import Card from './Card'

export default function Collection({getDifficulty, setCurrentScore, getCurrentScore}){

    // Winner winner chicken dinner
    const [getWinStatus, setWinStatus] = useState();

    // Keep track of card collection
    const [getCardCollection, setCardCollection] = useState([])

    // Keep track of cards selected during round(s)
    const [getSelected, setSelected] = useState([]);

    // Update collection when difficulty changes 
    useEffect(() => {
        updateCardCollection();
    }, [getSelected]);

    // Update collection when difficulty changes 
    useEffect(() => {
        reset();
        updateCardCollection();
        
    }, [getDifficulty]);

    // reset after difficulty is changed 
    const reset = () => {
        setWinStatus()
        setCurrentScore(0);
        setSelected([]);
    }

    // Add selected card to saved collections
    const updateSelectedCards = (id) => {

        if(getWinStatus==true || getWinStatus==false){
            reset();
        } else if (getSelected.find(card => card.id === id)){
            setWinStatus(false);
            console.log("Selected repeat card, you lost.");
        }else{
            if((getCurrentScore+1) == getDifficulty.cardQuantity){
                setWinStatus(true);
                console.log("You won!");
            }
            setCurrentScore(prevScore => prevScore + 1);
            console.log("Card was selected: "+id);
            const selectedCard = getCardCollection.find(card => card.id === id);
            setSelected(selected => [...selected, selectedCard])
        }
    }

    // Create new collection with cards previously selected plus randomly selected cards
    const updateCardCollection = () => {
        const newCards = [];
        const currentIds = new Set(getCardCollection.map(card => card.id));

        while (newCards.length < (getDifficulty.cardQuantity-getSelected.length)) {
            const randomNumber = Math.floor(Math.random() * (1000-1) + 1);

            if(!currentIds.has(randomNumber)){
                newCards.push({
                    id: randomNumber,
                    name: '',
                    type: '',
                    clicked: false,
                });
                currentIds.add(randomNumber);
            }
        }

        
        const newCollection = [...getSelected, ...newCards].map((card) => ({
            ...card, 
            order: Math.floor(Math.random() * (1000-1) + 1),
        }));


        setCardCollection(newCollection.sort((a,b) => a.order - b.order));

    }

    return (
        <div>
            <div class='won'>{getWinStatus == true ? "You Won! select a card to play again" : " "}</div>
            <div class='lost'>{getWinStatus == false ? "You lost, select a card to try again" : " "}</div>

            <div id='collection'>
                {Array.isArray(getCardCollection) && getCardCollection.map((card) => (
                <Card onClick = {updateSelectedCards} key = {card.id} id = {card.id}/>
                ))}
            </div>
        </div>
    )
}