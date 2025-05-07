import React, { useEffect, useState } from 'react'


export default function Card({onClick, id}){

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())            // <-- parse to JSON
        .then((response) => setPokemon(response))       // <-- store usable data
    }, [id]);

    if (!pokemon) return <div className='card'> </div>;

    return (
        <div onClick={() => onClick(id)} className='card'>
            <div className={pokemon.types[0].type.name}>
                {id}
                <img className='pokeImg' src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className='title'>
                    {pokemon.name.toUpperCase()} 
                </div>
                
            </div>     
        </div>
    )
}