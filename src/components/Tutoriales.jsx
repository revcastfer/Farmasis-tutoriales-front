import React from 'react';
import Categoria from './categoria';
import styled from "styled-components";
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import fondoHex from './imgs/fondoHexagonos.jpg'
import axios from 'axios'




const Titulovideos=styled.h1`
font-size: 44px;color: #f5b041;
left:0px
`;


let Reproductor=styled.div`

@media (max-width:900px){
	display:none;}`



const Descripcionvideos=styled.div`
font-size: 20px;
color grey;
position:absolute;
text-align:right;
padding:15px
`

const ContenedorVideos=styled.div`
display:flex;
background-image:url(${fondoHex});
background-size:cover;
justify-content:space-between;
width:100%;
@media (max-width:900px){
	background-size:contain;
}
`







export default function Tutoriales(){
let [data,setData]=React.useState([]);
let isLogin=useSelector(state=>state.isloguin)
let navigate=useNavigate();



React.useEffect(()=>{        
if(isLogin==="false"||isLogin===false) {navigate("/")};

axios("farmasistutorials")
.then(datos=>datos.data)
.then(datos=>setData(datos));
  
},[ isLogin,navigate])



let titulo=useSelector((state)=>state.titulo);
let descripcion=useSelector((state)=>state.descripcion);
let url=useSelector((state)=>state.url);

return	(	
   <ContenedorVideos>
	<Categoria data={data} />
	<Reproductor>
		{titulo?<Titulovideos>{titulo}</Titulovideos>:null}
		{url?<div style={ {width:"61vw",height:"50vh"}}><video style={ {width:"50vw",height:"50vh",position:"relative",left:"8%"}}controls="controls" src={url}/  ></div>:null}
		{descripcion?<Descripcionvideos>{descripcion}</Descripcionvideos>:null}

	</Reproductor>
	</ContenedorVideos>
)
}