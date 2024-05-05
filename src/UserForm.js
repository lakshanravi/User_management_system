// ekth functional component ekk widiht hdaagnnw
// form ek hdaagnna  form ek handle krn states oni
import {Grid,Typography,Button,Input}from  "@mui/material"; 
import { useEffect, useState } from "react";

//prop ekt damma addUser ek.eken puluwn user add krnn 
const UserForm = ({ addUser,updateUser,submitted,data,isEdit })=>{

  //state variable dekk hadagnna oni ara input wlin user input gnna
  //id kynne varable ek setId kynne wenas wenna oni function ekk.useState() kynne react hook ekk. react lifecycle ek manage krnna udaw wenw.useState() paawichchi krl variable ekk declare krgttot ek state variable ekk . nikn ghuwoth ek normal variable ekk
const[id,setId]= useState(1);
const[name,setName]= useState('');
//state value ek 0 ema dala tynne e initial value ek
//dan uda hdpu stste variable deka value widiht pass krnw yt input part wlt

//submit wela thibbe nthnm tma yata ew wenne. submit ek succes unm tma false wenn hdl tynne
useEffect(()=> {
  if(!submitted){
    setId(0);
    setName('');

  }
},[submitted]);

useEffect(()=>{
  if(data?.id && data.id !==0){
    setId(data.id);
    setName(data.name)
  }
},[data]);
//functionaal componenet ekk nm monw hri return krnn onine
  return(
  
<Grid
    container
    spacing={2}
    sx={{
      backgroundColor: '#ffffff',
      marginBottom: '30px',
      display:'block',
    }}

>
  {/* grid ek athule tw grid ekk nikn div ek thula tw div ekk wge.grid use klama wadiya CSS oni nh. xs kynne extra small. phone ekk wge small display ekk run kloth nm mekt sampuurna width ekm yodagnna kyl. typography nikn paragraph tag ek wge. h1 widihe ekk hadagena tynne */}
    <Grid item xs ={12}>
    <Typography component={'h1'}sx={{
        color:'#000000'}}>User Form
</Typography>
    </Grid>


  <Grid item xs={12} sm={6} sx={{display:"flex"}}>
    {/* display flex dunnnu nisa grid ek thula component dek ek pelata gaanata hda gnnw */}

    {/* sx nikn css wge denne */}
    <Typography
      component={'label'}
      htmlFor="id"
      sx={{
        color:'#000000',
        marginRight:'20px',
        fontSize:'16px',
        width:'100px',
        display:'block'
      }}>
        ID

    </Typography>
    <Input
      type="number"
      id="id"
      name="id"
      sx={{width:'400px'}}
      value={id}   //uda hdpu state variable ekk me id kyl dlala tynne
      onChange={e => setId(e.target.value)}  //me onchange function eke tm kynne input eke monw hri type klama wenna oni de mkkd kyl

      //event.target.value kyn eken inpute type krn value ek aran set id kyn function ek athult pass krl denw
      />
  </Grid>


{/* uda grid ek copy krl yt ek hduwe */}
  <Grid item xs={12} sm={6} sx={{display:"flex"}}>
    {/* display flex dunnnu nisa grid ek thula component dek ek pelata gaanata hda gnnw */}

    {/* sx nikn css wge denne */}
    <Typography
      component={'label'}
      htmlFor="id"
      sx={{
        color:'#000000',
        marginRight:'20px',
        fontSize:'16px',
        width:'100px',
        display:'block'
      }}>
        Name

    </Typography>
    <Input
      type="text"
      id="name" 
      name="name"
      sx={{width:'400px'}}
      value={name}
      onChange={e =>setName(e.target.value)}  //me onchange function eke tm kynne input eke monw hri type klama wenna oni de mkkd kyl
      />
  </Grid>

  {/* uda ew submit krnn button ekk */}
<Button
  sx={{
    margin: 'auto',
    marginBottom:'20px',
    backgroundColor:'#00c6e6',
    color:'#000000',
    marginLeft:'15px',
    marginTop:'20px',
    '&:hover' :{  //button ekt hover event ekk damma click krdi opacity wens wen widiht. backend ek ghddi user input nthnm click krnn den nti wenn hdnna
        opacity:'0.7',
        backgroundColor:'#00c6e6',
    }
  }}
  // addUser prop eken function ek run wenn dila tynne. mul function ek dakwa ynw ewit
  onClick={() => isEdit ? updateUser({id:id, name:name}) : addUser({id:id, name:name})}

  >
  isEdit? 'Update':'Add'
</Button>

</Grid>
  );

}

 export default UserForm;

 
// mehema default compinnet ekk widiht export klama . wena onima component ekkk idn me file ek vitrk cl krl me function ekt access wenn puluwn