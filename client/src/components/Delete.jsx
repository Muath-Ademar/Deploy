import React from 'react'
import Button from 'react-bootstrap/Button';

const Delete = (props) => {
    
    
  return (
    <div>
      <Button variant="outline-danger"onClick={props.successCallBack}>
        Delete
      </Button>
    </div>
  )
}

export default Delete

