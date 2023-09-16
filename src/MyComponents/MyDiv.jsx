import React from 'react'

function MyDiv(props) {

    const divStyle = {
        display: "flex",
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'aqua',
        width: '100%',
        overflow: 'hidden',
        height: props.highet,
        transition: 'height 1.5s ease', 
        
      };
  return (
    <div style={divStyle}>
        <h1>Hello Everyone</h1>
        

    </div>
  )
}

export default MyDiv