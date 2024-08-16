import React, { useState } from 'react'
import axios from 'axios'
import PlayerForm from '../components/PlayerForm'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Create = () => {
    const [players, setPlayers] = useState([])
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const createPlayer = player =>{
        axios.post('http://localhost:8000/api/players', player)
        .then(res =>{
            setPlayers([...players, res.data])
            navigate("/players/list")
            setErrors("")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })            

    }
  return (
    <div>
      
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <p><Link to={"/"}>Add player</Link> | <Link to={"/players/list"}>List</Link></p>
      <PlayerForm onSubmitProp={createPlayer} intialName="" intialPosition=""/>
    </div>
  )
}

export default Create
