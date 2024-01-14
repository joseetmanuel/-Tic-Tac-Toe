import React, { useEffect, useState } from "react";
import '../Styles/body.css'
import { checkWiner } from "./winner";


const Square = ({id,player,newState}) => {
    const [color,setColor] = useState('red')
    const [status, setStatus] = useState(null)
    const xo = ['O','X']
    
    const palet = ['red','green','violet','blue']
    const getRandom = () =>{
        return (palet[Math.floor(Math.random()*palet.length)])
    }

    useEffect(() => {
        console.log(`mounting ${id}`)
        return () => console.log(`unmounting ${id}`)
    })


    const handleClick = (i) => {
        let col = getRandom()
        setColor(col)
        i.target.style.backgroundColor = col
        let next_player = newState(id)
        setStatus(next_player)
    }
    return(
        <button style={{width: '150px',height:'150px'}} onClick={handleClick}><h1>{xo[status]}</h1></button>
    )
}

const Tablero2 = () => {
    let [player,setPlayer] = useState(0)
    const [state,setState] = useState(Array(9).fill(null))

    let status = `player is : ${player}`
    let winner = checkWiner(state)
    console.log(winner)

    if(winner != null) status = `Winner is: ${winner}`

    const newState = idSquare => {
        let the_player = player
        state[idSquare] = player
        setState(state)
        let next_player = ((player + 1) % 2)
        setPlayer(next_player)
        
        return the_player
    }

    function rederSquare (i) {
        return(
            <Square id = {i} player = {player} newState={newState}></Square>
        )
    }
    
    
    return(
        <>
            <div className="tablero">
                <div className="grid-row">
                    {rederSquare(0)}
                    {rederSquare(1)}
                    {rederSquare(2)}
                    {rederSquare(3)}
                    {rederSquare(4)}
                    {rederSquare(5)}
                    {rederSquare(6)}
                    {rederSquare(7)}
                    {rederSquare(8)}
                </div>  
               
                <div className="info">
                    Así vamos: {status}
                </div>  
            </div> 
       </>
    )
}

export {Tablero2}