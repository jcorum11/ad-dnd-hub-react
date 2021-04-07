import React from 'react'
import Player from "../../components/Player"

const Players = () => {
  return <>
    <div id="player-container" className="container bg-danger">
      <Player playerName="Gavinrad"/>
      <Player playerName="Leonias"/>
      <Player playerName="Sinisa"/>
    </div>
  </>
}

export default Players