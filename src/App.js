
import React, { useState } from 'react' ;
import Users from './components/Users';
import NewUser from './components/NewUser';
import  './App.css';

function App() {

  const [users, setUsers] = useState([
    {id:1, name:'Bikram'},
    {id:2, name:'Tanmoy'},  
    {id:3, name:'Sandeep'},  
    {id:4, name:'Krishna'},
  ])



const deleteUser = (findId) => {
//alert(id);
const filter = users.filter(user => user.id != findId);
setUsers(filter);
}

const handeAddNewUser = (newUser) => {
  //console.log(user)
  setUsers((prevUser) => [...prevUser, newUser]);
   }

  return (
    <>
<div className='wrapper'>
      <NewUser users={users} handeAddNewUser={handeAddNewUser}></NewUser>
      <Users users={users} deleteUser={deleteUser} ></Users>
      </div>
      
    </>
  );
}

export default App;
