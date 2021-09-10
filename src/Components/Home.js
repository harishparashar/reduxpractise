import React from 'react'
import { Table } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux/AllAction'

export default function Home() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.user.items
  })
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>{" "}
            <th>Email</th>{" "}
            <th>Phone</th>{" "}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => (
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <Link to={`/edituser/${item.id}`}>
                  <button type='button'>Edit</button>
                </Link>
                <button type='button' onClick={() => { dispatch(deleteUser(item.id)) }}>Delete</button>
              </td>
            </tr>
          )
          )}
        </tbody>
      </Table>

    </>
  )
}
