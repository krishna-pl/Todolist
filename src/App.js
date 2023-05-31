
import React, { useState } from 'react' ;
import Users from './components/Users';
import NewUser from './components/NewUser';
import  './App.css';

function App() {

  const [users, setUsers] = useState([
   {
    id:'1',
    category:'1',
    usertype: [
      {name:'Bikram'},
      {name:'Tanmoy'},  
     ],
   },
   {
    id:'2',
    category:'2',
    usertype: [
      {name:'Sandeep'},  
     // { name:'Krishna'},
     ],
   },
   
  ])



const deleteUser = (findId) => {
//alert(id);
const filter = users.filter(user => user.id != findId);
setUsers(filter);
}

const handeAddNewUser = (newUser) => { 
  //console.log([users].category);
 //console.log(newUser)
  // setUsers({...users, category:'3', });
 const krish =  users.find( a => a.category === newUser.category);
  //krish ?  alert(10) : alert(20);
     if(!krish){

      //console.log(krish.usertype)

      setUsers((prevuser) => [...prevuser, 
        {id:newUser.id,
         category:newUser.category,
         usertype: [
                   {name:newUser.usertype.name},
                   ]
        }
      ]); 

     } else {
     //alert('have')
    //  console.log(newUser.category);
    //  console.log(users);
     let sudipta = users.filter( a => parseInt(a.category) !== parseInt(newUser.category));
     let ani = users.find( a => parseInt(a.category) === parseInt(newUser.category));
     
     ani.usertype.push({name : newUser.usertype.name})

  // console.log([sudipta, ani]);
   console.log(sudipta); 

   //setUsers(sudipta, ani);

   setUsers([...sudipta, ani  ]); 

     }         
     
    
  


   }

 //console.log(users);

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
