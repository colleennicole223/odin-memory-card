import { React, useEffect, useState } from 'react'
import Card from './Card'

export default function Collection({getDifficulty, setCurrentScore, getCurrentScore}){

    // Keep track of points
    const points = 0; 

    // Keep track of card collection
    const [getCardCollection, setCardCollection] = useState([])

    // Keep track of cards selected during round(s)
    const [getSelected, setSelected] = useState([]);

    // Update collection when difficulty changes 
    useEffect(() => {
        updateCardCollection();
    }, [getDifficulty, getSelected]);

    // Add selected card to saved collections
    const updateSelectedCards = (id) => {
        
        if(getSelected.find(card => card.id === id)){
            console.log("Selected repeat card, you lost.");
            setCurrentScore(0);
            setSelected([]);
        }else{
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

        setCardCollection([...getSelected, ...newCards]);
    }

    return (
        <div id='collection'>
            {Array.isArray(getCardCollection) && getCardCollection.map((card) => (
            <Card onClick = {updateSelectedCards} key = {card.id} id = {card.id}/>
            ))}
        </div>
    )
}