import React from 'react'
import style from './Users.module.css'

function Users({users, deleteUser}) {
    //const {id, name} = users;
  return (
    <ul className={style.list}>
        {
          users.map( user => <li  key={user.id} >{user.name} <span onClick={() => {deleteUser((user.id))}}  className={style.deleteBtn}>X</span></li> )
        }
      </ul>
  )
}

export default Users
