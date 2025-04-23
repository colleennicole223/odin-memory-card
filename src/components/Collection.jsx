import { React, useEffect, useState } from 'react'
import Card from './Card'

export default function Collection({getDifficulty}){

    // Keep track of card collection
    const [getCardCollection, setCardCollection] = useState([])

    // Keep track of cards selected during round(s)
    const [getSelected, setSelected] = useState([]);

    // Update collection when difficulty changes 
    useEffect(() => {
        updateCardCollection();
    }, [getDifficulty]);

    // Create new collection with cards previously selected plus randomly selected cards
    const updateCardCollection = () => {
        const newCards = [];
        const currentIds = new Set(getCardCollection.map(card => card.id));

        while (newCards.length < getDifficulty.cardQuantity) {
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
            <Card key = {card.id} id = {card.id}/>
            ))}
        </div>
    )
}