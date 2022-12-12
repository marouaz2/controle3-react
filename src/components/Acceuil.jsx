import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import ListUser from "./ListUser";

export default function Acceuil() {
//   const navigate = useNavigate();
//   const user = useSelector(state => state.user.user);

//   useEffect(() => {
//     if (Object.keys(user).length === 0) {
//       navigate("/");
//     }
//   }, []);

  return (
    <div className="acceuil">
            <header>
                <h1>Gestion des Taches</h1>
            </header>
      <div className="content">
        <h2>Liste des utilisateurs:
        {listUser.length!==0 && 
            listUser.map(item => <h2>{item.id}</h2>)
        }
        <ListUser />
        </h2>
      </div>
    </div>
  );
}

