import React from 'react'
import Button from './Button'

export default function Counter({ onInc, onDec, onDelete, value }) {

    return (
        <div>

            <label>{value === 0 ? "Zero" : value}</label>
            <Button onInc={onInc}>+</Button>
            <Button onDec={onDec} disable={value < 1}>-</Button>
            <Button onDel={onDelete}>Delete</Button>
        </div>
    )
}
