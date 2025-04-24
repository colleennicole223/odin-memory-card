import React from 'react'

export default function Card({onClick, id}){

    return (
        <div onClick={() => onClick(id)} className='card'>
            <div className='cardInlay'>ID: {id}</div>
        </div>
    )
}