import React, { useState } from 'react'
import PropTypes from 'prop-types'

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

Toggleable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Toggleable