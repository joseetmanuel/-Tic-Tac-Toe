import React, { useState } from "react";
import '../Styles/body.css'


const Square = ({id,player}) => {
    
    return(
        <button style={{width: '150px',height:'150px'}} onClick={() => {alert(`olsi: ${id}`)}}><h1>{player}</h1></button>
    )
}

const Tablero3 = () => {
    let [player,setPlayer] = useState(1)
    let [mounted,setMounted] = useState(true)
    let [random,setRandom] = useState(0) 

    const toggle = () => {
        setMounted(!mounted)
    }
    const rerender = () => setRandom(Math.floor(Math.random()))

    function rederSquare (i) {
        return(
            <Square id = {i} player = {player}></Square>
        )
    }
    
    
    return(
        <>
            <div className="tablero">
                <div className="grid-row">
                    { mounted && rederSquare(1)}
                    {mounted && rederSquare(2)}
                    {mounted && rederSquare(3)}
                </div>  
                <div className="info">
                    <button onClick={toggle}>show / hode row</button>
                    <button onClick={rerender}>Rerender</button>
                </div>  
            </div> 
       </>
    )
}

export {Tablero3}