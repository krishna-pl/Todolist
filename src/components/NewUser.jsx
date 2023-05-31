import React, { useState } from 'react' 
import style from './NewUser.module.css'

function NewUser({handeAddNewUser}) {

// const [priority1, setPriority1] = useState()
// const [priority2, setPriority2] = useState()
// const [priority3, setPriority3] = useState()


    const [addUser, setAdduser] = useState({
      id:'',
      category : '',     
      usertype: 
        {
          name:''
        },         
    });

     //const {id, category, usertype} = addUser;

    //console.log({category});

    const onChangecategory = (e) => {

      const name = e.target.name;
      const value = e.target.value;
      setAdduser({       
            ...addUser, [name] : value       
      });
      }

//console.log(addUser.category)

const onChangeName = (e) => {

  const name = e.target.name;
  const value = e.target.value;

  setAdduser({
    ...addUser,
     usertype : {
        ...addUser.usertype, [name] : value
      }
    // usertype: [{
    //   [name] : value,  
    // }],

  });
  }
      
     // console.log(addUser);
      
      const onSubmitHandeler = (e) => {
        e.preventDefault();
        //alert(addUser);
        const newUser = {id: new Date().getTime().toString(), category:addUser.category, usertype:{ name:addUser.usertype.name} }
        //setUsers((prevUser) => [...prevUser, newUser]);
         handeAddNewUser(newUser);
        //setAdduser('');
        //console.log(newUser);
      }


  return (
    <>
      <form onSubmit={onSubmitHandeler} className={style.form}>
       
        <input className={style.input} placeholder='Enter Name' type='text' name='name'  value={addUser.usertype.name} onChange={onChangeName} />
        {/* <input className={style.input} placeholder='Enter Name' type='text' name='' value={addUser} onChange={onChangeHandeler} /> */}
        <select className={style.select} value={addUser.category} name='category' onChange={onChangecategory} >
          <option value='1'>category 1</option>
          <option value='2'>category 2</option>
          <option value='3'>category 3</option>
          </select>
        <button className={style.button} >Add User</button>
        </form>
    </>
  )
}

export default NewUser
