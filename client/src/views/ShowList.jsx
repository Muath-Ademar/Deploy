import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PlayerList from '../components/PlayerList'
import { Link, useParams } from 'react-router-dom'

const ShowList = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
axios.get('http://localhost:8000/api/players')
    .then(res =>{
        setPlayers(res.data)
    }, [])
    })

    
    const removeFromDom = (playerId) =>
        axios.delete(`http://localhost:8000/api/player/${playerId}`)
    .then(res => {
        setPlayers(players.filter(player => player._id !== playerId));// Remove from DOM after successful deletion
    })
    .catch(err => console.error(err));
  return (
    <div>
      <p><Link to={"/"}>Add player</Link> | <Link to={"/players/list"}>List</Link></p>
      <PlayerList players={players} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default ShowList
