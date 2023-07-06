
import React from 'react';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
import logo from './imgs/logosinfondo.png';
import fondo from './imgs/fondoLog.jpg';
import ComboSearch from './ComboSearch'
import {useDispatch,useSelector} from 'react-redux';
import {loguin} from './redux/actions.js';
import logoPie from './imgs/logoPie.png';
import axios from "axios";

const Pie=styled.div`
background-color:grey;
height: 60px;
width: 100%;
position:absolute;
bottom:0px;
opacity: 0.4;
display:flex;
justify-content:center;
align-items:center;
bottom:0px
`;

const PanInicial=styled.div`
background-image:url(${fondo});
position:relative;
display:flex;
justify-content:center;
background-size:cover;
background-repeat: no-repeat;
min-width: auto;
width: 100%;
height:100vh
`;

const Ingreso=styled.div`
background-color:#F6FDFB;
border: 3px solid #09b5c1;
width: 300px;
Min-Height: 28vh; 
border-radius:25px;
font-size:30px;
position:absolute;
color: #033953;
top:32%;
text-align:center;
padding:10px
`;
const Inputs=styled.input`
width:70%;
padding:8px;
border-radius:8px;
border:1px solid grey
`;

const ButtonLogin=styled.button`
width:80%;
padding:8px;
border-radius:8px;
border:none;
background-color:#09b5c1`;

const ImgStyle=styled.img`
width:25vw;
max-width:150px;
position:absolute;
top:1%;
left:1%
`;

const ImgPie=styled.img`
width:auto;
height:45px`;
 



export default function Login(){
const navigate=useNavigate();
let dispatch=useDispatch();
let isLogin=""+useSelector(state=>state.isloguin);

React.useEffect(()=>{ if(isLogin==="true" ){ navigate("./Home/Tutoriales")}},[isLogin,navigate])

let validateUser=async(name,password)=>{
	try{
	let validate=await axios.post("http://localhost:3002/login",{user:name,password:password},{
    headers:{'Content-Type': 'application/x-www-form-urlencoded'}});
    return validate.data
}
catch(err){return err.response.data}	
	
}


let handleSubmit=async(e)=>{
e.preventDefault();

let user=document.getElementById("user").value;
let password=document.getElementById("password").value;
let validate=await validateUser(user,password);

if(validate===true){dispatch(loguin(user));navigate("./Home/Tutoriales")}
else{alert(validate)}
}



return(
<PanInicial> 

<ImgStyle src={logo} alt="logo farmasis"/>
    <Ingreso>
	<span ><h3>acceso a usuarios</h3></span>
	
	<form onSubmit={handleSubmit}>
	<ComboSearch />
		<div>
		<Inputs placeholder="Password" type="text" id="password" />
	   </div>
	 
	<ButtonLogin type="submit" ><b>ingresar</b></ButtonLogin>
	</form>
	</Ingreso>
	<Pie><ImgPie src={logoPie} alt="logo cfc"/> </Pie>
</PanInicial>)

}