import React from 'react'

export default function Button({ children, onInc, onDec, onDel, onReset, onRefresh, disable }) {

    // function handleClick() {
    //     onInc()
    // }

    return (
        <>
            <button
                onClick={onInc || onDec || onDel || onReset || onRefresh}
                
                disabled={disable}>
                {children}
            </button>
        </>
    )
}
