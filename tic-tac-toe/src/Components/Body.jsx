import React, { useState } from "react";
import '../Styles/body.css'



const Tablero = () => {
    let [player,setPlayer] = useState(0)
    
    const handlelick = (e) => {
       (player === 0)? setPlayer(1) : setPlayer(0)
       e.target.style.backgroundColor = 'red'
       e.target.style.width = '400px'
    }
    return(
       <div className="tablero" onClick={handlelick}>player: {player} </div> 
    )
}

export {Tablero}