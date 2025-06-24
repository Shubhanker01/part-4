import React, { useState } from 'react'

function Toggleable({ buttonLabel, children, visible, toggleVisibility }) {
    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    return (
        <>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{buttonLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {children}
                <button onClick={toggleVisibility}>Cancel</button>
            </div>
        </>
    )
}

export default Toggleable