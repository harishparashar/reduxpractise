import React, { useState } from 'react';
import shortid from 'shortid'
import { useDispatch } from 'react-redux'
import { userRegister } from '../redux/AllAction'
import { useHistory } from 'react-router-dom'




const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const Submitdata = async e => {
    e.preventDefault();
    let data = { name, email, phone }
    Object.assign(data, { id: shortid.generate() })
    dispatch(userRegister(data))
    history.push('/')
  }
  return (
    <>
      <form onSubmit={Submitdata}>
        <label>Name </label>
        <input type="text" name="fname" value={name} onChange={(e) => { setName(e.target.value) }} />
        <label>Email </label>
        <input type="email" name="mailid" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <label>Contact Number </label>
        <input type="number" name="number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Registration;