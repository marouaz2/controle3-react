import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailsUser() {

  const SelectedUser = useSelector(state => state.user.selectedUser);
  const user = useSelector(state => state.user.data).filter(item => item.id.common===SelectedUser);

  return (
    <div>
        {user.id==SelectedUser && 
            <div>
                <img src={user[0].png} alt="" />
                <h1>Firstname : {user[0].firstName} -LastName:{user[0].lastName} - 
                Age:{user[0].age} - Gender:{user[0].gender} - Email:{user[0].email}-
                Phone:{user[0].phone} - poids:{user[0].weight} - hauteur:{user[0].height}-
                Date naissance:{user[0].birthDate} - groupe sanguin:{user[0].bloodgroup}- couleur d'oeil:{user[0].eyeClor}</h1>
            </div>
        }
    </div>
  )
}