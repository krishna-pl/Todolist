import React, { useState } from 'react' 
import style from './NewUser.module.css'

function NewUser({users, handeAddNewUser}) {

    const [addUser, setAdduser] = useState();

    const onChangeHandeler = (e) => {
        setAdduser(e.target.value);
      }
      
      const onSubmitHandeler = (e) => {
        e.preventDefault();
        //alert(addUser);
        const newUser = {id: users.length+1, name:addUser}
        //setUsers((prevUser) => [...prevUser, newUser]);
        handeAddNewUser(newUser);
        setAdduser('');
      }


  return (
    <>
      <form onSubmit={onSubmitHandeler} className={style.form}><input className={style.input} placeholder='Enter Name' type='text' value={addUser} onChange={onChangeHandeler} /><button className={style.button} >Add User</button></form>
    </>
  )
}

export default NewUser
