import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Delete from './Delete';
import Swal from 'sweetalert2'

const PlayerList = (props) => {
    const {removeFromDom} = props
    const handleDelete = (playerId) => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              removeFromDom(playerId)
              Swal.fire(
                  'Deleted!',
                  'The player has been deleted.',
                  'success'
              );
          }
      });
  };
  return (
<div className="table-responsive">
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.players.map((player, i) => (
        <tr key={i}>
          <td>{player.name}</td>
          <td>{player.position}</td>
          <td>
            <Delete successCallBack={() => handleDelete(player._id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>

  )
}

export default PlayerList
