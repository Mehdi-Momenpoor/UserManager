import React from 'react'

export default function Header({counter}) {
    return (
        <div>
            {counter === 0 ? "Zero" : counter} &nbsp;
            {counter === 0 ? 'item' : 'items'}
        </div>
    )
}
