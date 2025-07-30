import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Toggleable({ buttonLabel, children, visible, toggleVisibility }) {
    const showWhenVisible = { display: visible ? 'block' : 'none' }

    return (
        <>
            {/* <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{buttonLabel}</button>
            </div> */}
            <div style={showWhenVisible} className='toggleableContent'>
                {children}
            </div>
            <button onClick={toggleVisibility}>{buttonLabel}</button>
        </>
    )
}

Toggleable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Toggleable