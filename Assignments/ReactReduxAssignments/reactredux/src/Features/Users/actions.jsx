import * as types from './actionTypes'
import axios from 'axios'

const getdata=(users)=>({
  type:types.GET_USER,
  payload :users
})

const getadmin = (admin) =>({
  type : types.GET_ADMIN,
  payload : admin
})

const edituserdata=(user)=>({
    type:types.GET_SINGLE_USER,
    payload:user
})

export const getuserdata=()=>{
 return function (dispatch)
    {
        axios.get(`http://localhost:3001/Users`)
        .then((resp)=>dispatch(getdata(resp.data)))
        // console.log(resp.data)
    }
}


export const getadmindata=(admin)=>{
  return function (dispatch)
     {
      console.log(admin)
         axios.get(`http://localhost:3001/admin?email=${admin.email}`)
         .then((resp)=>{dispatch(getadmin(resp.data));console.log(resp.data)})
         .catch(err=>console.log(err))
     }
 }

export const add_data=(data)=>{
    return function (dispatch)
    {
      axios.post(`http://localhost:3000/User1`,data)
      .then((resp)=>{})
      .catch(error=>console.log(error))
    }
}

export const delete_data=(id)=>{
    return function(dispatch)
    {
        axios.delete(`http://localhost:3001/Users/${id}`)
        .then((resp)=>{})
        .catch(error=>console.log(error))
    }
}

export const edit_data=(id)=>{
    return function(dispatch)
    {
        axios.get(`http://localhost:3001/Users/${id}`)
        .then((resp)=>{dispatch(edituserdata(resp.data))})
        // .catch(error=>console.log(error))
    }
}

export const update_data=(id,formvalue)=>{
  return function(){
    axios.patch(`http://localhost:3001/Users/${id}`,formvalue)
    .then((resp)=>{})
    .catch(error=>console.log(error))
  }
}