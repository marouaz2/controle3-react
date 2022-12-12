import React from 'react'
import { useSelector } from 'react-redux';

export default function ListUser() {

  const SelectedUser = useSelector(state => state.user.selectedUser);
  const listUser = useSelector(state => state.user.data).filter(item => item.user===SelectedUser);

  return (
    <div>

        <h1>Liste des utilisateurs</h1>
        {listUser.length!==0 && 
            listUser.map(item => <h2>{item.id}</h2>)
        }
    </div>
  )
}