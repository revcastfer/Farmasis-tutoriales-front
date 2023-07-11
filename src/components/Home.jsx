import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux';
import {logout} from './redux/actions.js';
import {Outlet,NavLink,useNavigate} from 'react-router-dom'
import logo1 from './imgs/logosinfondo 3.png';
import logo2 from './imgs/logosinfondo.png';
import baner1 from './imgs/baner1.jpg'
import baner from './imgs/baner.JPG'
import React from 'react'




const LogoFarmasis=styled.img`
width:120px;
position:relative;
left:44px;
top:10px;
@media (max-width:900px){
	left: 5px;
top:2px;
width:20vw}
`;

const BackgroundLogoFarmasis=styled.img`
position: absolute;
left:-20px;
height:100%;
width:230px;
minWidth:30vh;
@media (max-width:900px){
	display:none}
`

const UserName=styled.span`
    	font-size:30px;
    	font-weight: bold;
	color:#033953;
	@media (max-width:900px){
	font-size:25px};
	@media (max-width:600px){
	font-size:15px};
  @media (max-width:400px){
	font-size:13px};

	`
	


const InicialLetter=styled.div`
	background-color:purple;
	width: 65px;
    height:65px; 
    border-radius:45px;
    margin:5px;
    font-size:45px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:600px){
          font-size:20px;
          width:35px;
          height:35px};
@media (max-width:300px){
          font-size:10px;
          width:20px;
          height:20px;
}
`

const Navbar=styled.div`
position: relative;
flex-direction: column;
display: flex;
background-image:url(${baner});
background-size:cover;
background-repeat: no-repeat
`
const UserInfo=styled.div`
position: absolute;
right:10px;
top:1px;
display: flex;
margin:0px;
@media (max-width:600px){
top:5px
}`


const Logout=styled.div`
position: absolute;
right:81px;
top:30px;
color:red;
font-size:25px;
font-weight:bold;
@media (max-width:600px){
top:40%;
right:60px;
font-size:15px};
@media (max-width:300px){
          font-size:13px;
          right:30px;
         }`

const DivOpcionsNav=styled.div`
position: relative;
display:flex;
justify-content: space-around;
width:75%;
left:20%;
font-size:23px;

@media (max-width:900px){
justify-content:space-around;
width:100%;
left:0px;
};
@media (max-width:500px){
font-size:18px;
}
@media (max-width:300px){
justify-content:space-around;
width:100%;
font-size:10px;
left:0px;
}`




const otionsLinksNavbar=({isActive})=>{
	return {color: isActive ? 'orange':'#033953',
	fontWeight: isActive? "bold" : 'normal',
	textDecoration: isActive? "none" : 'underline',
	}
}



export default function Home(){
 const navigate = useNavigate();
let isLogin=useSelector(state=>state.isloguin);

let dispatch=useDispatch();
let user=useSelector(state=>state.usuario); 


let handleLogout=()=>{dispatch(logout()); navigate("/") };

React.useEffect(()=>{
	if(isLogin==="false"||isLogin===false) {navigate("/")} 
},[isLogin,navigate])



	return (
		<div>
		<Navbar>
		
		<BackgroundLogoFarmasis src={baner1} alt="banner" />

        <picture>
		<source srcSet={logo2} media="(max-width:900px)"/>
		<LogoFarmasis src={logo1} alt="logocfc" />
		</picture>
		
		

        <DivOpcionsNav>
		<NavLink  to="/Home/Referidos" style={otionsLinksNavbar} >Referidos </NavLink>
		<NavLink  to="/Home/Tutoriales" style={otionsLinksNavbar} >Video-tutoriales</NavLink>
		{user==="Cesarin"?<NavLink  to="/Home/Upload" style={otionsLinksNavbar} >subir videos</NavLink>:null}
       </DivOpcionsNav>


       <div>
		<UserInfo>
		{user?<UserName>Bienvenido: {user}</UserName>:null}
		{user?<InicialLetter>{user[0].toUpperCase()}</InicialLetter>:null}
		<Logout><span onClick={handleLogout} >Logout</span></Logout>
		</UserInfo>
		
		</div>


		
		</Navbar>

		<Outlet/>
		</div>

		)
}
