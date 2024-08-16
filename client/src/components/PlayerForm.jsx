import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
const PlayerForm = (props) => {
    const {onSubmitProp, intialName, intialPosition} = props
    const [name, setName] = useState(intialName || "")
    const [position, setPosition] = useState(intialPosition || "")

    useEffect(() => {
        setName(intialName)
        setPosition(intialPosition)
    }, [intialName, intialPosition])

    const handleSubmit = e =>{
        e.preventDefault()
        onSubmitProp({name, position})
        setName("")
        setPosition("")
    }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
             <Form.Group className="mb-3">
             <Form.Control type="text" placeholder="Add Player"  onChange={(e)=>setName(e.target.value)} value={name}/>
             </Form.Group>

             <Form.Group className="mb-3">
             <Form.Control type="text" placeholder='Add position' onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </Form.Group>

            <Button variant='outline-primary' type="submit">Add Player</Button>
        </Form>
    </div>
  )
}

export default PlayerForm
