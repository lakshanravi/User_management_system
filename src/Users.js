import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

import {Box} from "@mui/material";

import  Axios  from "axios";
//functional componenet ekk hduw users kyl.form eke kotas dekai udin user form ek ytin user table ek. userform ekai table ekai hdl in oni it klin wenma file widiht

//parent component ek wifihtt tm me Users ek tynne.eke child ew tm userstable,userform ema

//array ekk declare krgmu. const kyl daanne aaye mkut assign krne nthi nisa psse . oni nm var ho let widiht hdnnth puluwn

//me yt tika ain kla dan API intefrate krn nisa eken userlw gnn puluwnne
// const users = [
// {
//  id:1,
//  name:'Prasad',
// },
// {
//   id:2,
//   name:'Prasadi',
//  }

// ];

//dan me uda usersla tik variable ekk hrha gnna oni ara table ekt. import krgnna usertable ek
const Users = () =>{

  //users kyn nmin state variable ekk hdmu.setusers kynne function ekk
  const [users,setUsers] = useState([]);
  //submit und ballaagnn ekk. form eken
  const[submitted,setSubmitted] = useState(false);
  const [isEdit,setIsEdit] = useState(false);
  const[selectedUser,setSelectedUser]=useState({});

//useEffedt kynnne hook ekk. load wena welawt getUsers function ek krn akyl kynne eken
  useEffect(()=> {
    getUsers();
  },[]);

  //users tikA FILL KRgnn function ekk
  const getUsers = () =>{

  //api ekt call krnw backend eke hdpu. me axios mgin.url ek denw adala function ekt adaala api eke
    Axios.get('http://localhost:3001/api//users')
    //rseponse widiht enne API eken retur krn ek
    //success unoth then ek. error thibboth catch ekt ynne
      .then(response => {
        //setUser t asign krnw response ek
        //or operatoer ekk anthimt tynne. data ek nthnm empty array ek enn kyl
        setUsers(response.data?.response || []);
      })
      .catch(error =>{
        console.error("Axios error :", error)
      });
  }

  //dan user lw add krnn function ek hdmu
  const addUser = (data) =>{
    //submit button ek click krl kyn adahas denw
    setSubmitted(true);
    //klin wge Api link ekai. tw amatharawa oni payload ekk (id,name input widiht api ekt denn oni hinda.form ekt dena input tma mekt gnne)
    const payload ={
      id: data.id,
      name:data.name, 
    }
    Axios.post('http://localhost:3001/api/createuser',payload)
    //response ekk oni nh
    .then(() => {
      //add klama get user function ek call wenn hdnn oni. nthnm page ek load krnn wenw add unu userw table eke pennana
      getUsers();
      //wade krl iwr unm setsubmitted ek false wenn onoi aye. ethoot tma add krn space ek his wenne
      setSubmitted(false);
      isEdit(false);
    })
    .catch(error =>{
      console.error("Axios error :", error)
    });
  }

  const updateUser=(data)=>{
    setSubmitted(true);
    const payload = {
      id: data.id,
      name:data.name, 
    }
    Axios.put('http://localhost:3001/api/updateuser',payload)
    //response ekk oni nh
    .then(() => {
      //add klama get user function ek call wenn hdnn oni. nthnm page ek load krnn wenw add unu userw table eke pennana
      getUsers();
      //wade krl iwr unm setsubmitted ek false wenn onoi aye. ethoot tma add krn space ek his wenne
      setSubmitted(false);
      isEdit(false);

    })
    .catch(error =>{
      console.error("Axios error :", error)
    });
  }
  const deleteUser = (data) => {
    
   
    Axios.delete('http://localhost:3001/api/deleteuser',data)
    //response ekk oni nh
    .then(() => {
      //add klama get user function ek call wenn hdnn oni. nthnm page ek load krnn wenw add unu userw table eke pennana
      getUsers();
    
    })
    .catch(error =>{
      console.error("Axios error :", error)
    });
  }
  return(
    <Box
      sx={{
        width: 'calc(100%-100px)',
        margin: 'auto',
        marginTop:'100px',
      }}
      >

        {/* me form eken tm cl wen oni addduser function ek */}
    
<UserForm
     addUser={addUser}
     updateUser={updateUser}
     submitted = {submitted}
     data={selectedUser}
     isEdit={isEdit}
     />  

    {/* ara uda users kyl hdpu array ek tma table ekt pass krnne me yata */}
    <UsersTable 
    rows={users}
    selectedUser={data => {
      setSelectedUser(data);
      setIsEdit(true);
    }}
    deleteUser={data => window.confirm('Are you sure') && deleteUser(data)}
    />
    </Box>
  );

  // uda ek root component ekai tynna puluwn. ek JSX nisa XML standard anuwa.e hinda box kyl root ekk daaagtta
}

export default Users;