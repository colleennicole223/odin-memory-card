import React from 'react'

export default function Card({onClick, id, order}){

    return (
        <div onClick={() => onClick(id)} className='card'>
            <div className='cardInlay'>ID: {id} Order: {order}</div>
        </div>
    )
}