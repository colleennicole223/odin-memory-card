import React, { useEffect, useState } from 'react'


export default function Card({onClick, id, order}){

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())            // <-- parse to JSON
        .then((response) => setPokemon(response))       // <-- store usable data
    })

    if (!pokemon) return <p>Loading...</p>;

    return (
        <div onClick={() => onClick(id)} className='card'>
            <div className='cardInlay'>
                ID: {id} Order: {order} Name: {pokemon.name}
                <img className='pokeImg' src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            
            
        </div>
    )
}