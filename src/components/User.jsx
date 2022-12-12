import React from 'react'
// import { useSelector } from 'react-redux'

export default function User(props) {

    // const SelectedUser = useSelector(state => state.user.selectedUser);
    // const user = useSelector(state => state.user.data).filter(item => item.name.common===SelectedUser);

  return (
    <div>
    
            <div>
                <img src={props.user.image} alt="" />
                <h1>{props.user[0].fistName} - {props.user[0].lastName}</h1>
                <input type='submit' placeholder='Detail User' name='detail'  onClick={props.detail} ></input>
                <input type='submit' placeholder='Liste des taches' name='detail' onClick={props.tache} ></input>
            </div>
        
    </div>
  )
}
