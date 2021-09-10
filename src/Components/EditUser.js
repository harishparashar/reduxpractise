import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userInfo, userUpdate } from '../redux/AllAction';
class EditUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
    }

  }

  componentDidMount() {
    this.props.getuserDetails(this.props.match.params.id)
    // console.log("id",this.props.match.params.id)
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.name === ''){
      const {name,email,phone} =this.props.myuser.user
      this.setState({
        name:name,
        email:email,
        phone:phone
      })
    }
  }

   SubmitData = async (e)=> {
     e.preventDefault();
let newData = Object.assign(this.props.myuser.user,this.state)
this.props.history.push('/')
  }
  
  
  render() {
    const { name, email, phone } = this.state
    return (
      <>
        <form>

          <lable>Name </lable>
          <input type="text" value={name} onChange={(e) => { this.setState({name:e.target.value}) }} />

          <lable>Email </lable>
          <input type="email" value={email} onChange={(e) => { this.setState({email:e.target.value}) }} />

          <lable>Contact Number </lable>
          <input type="number" value={phone} onChange={(e) => { this.setState({phone:e.target.value}) }} />



          <button type="submit" onClick={this.SubmitData}>Edit Data</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myuser: state.user
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    getuserDetails: (id) => { dispatch(userInfo(id)) },
    updateInfo : (data) => { dispatch(userUpdate(data))}
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(EditUser)