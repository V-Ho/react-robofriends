import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', padding: '20px', margin: '5px', height: '80vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll