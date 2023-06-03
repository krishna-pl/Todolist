import React from 'react'
import style from './Users.module.css'

function Users({users, deleteUser}) {
    //const {id, name} = users; 
    //console.log(users);
  return (
    <ul className={style.list}>
        {
          users.sort( (a,b) => a.category > b.category ? 1 : -1).map( (cat, index) => {
            return (
            <li  key={index} >
              <span onClick={() => {deleteUser((cat.id))}}  className={style.deleteBtn}>X</span>
              <h3>category : {cat.category} </h3>
            <ul>
            {
              cat.usertype.map( (user, index) => <li  key={index} >{user.name}</li> )
            }
            </ul>
          </li>
            );
          } )
        }
      </ul>
  )
}

export default Users
