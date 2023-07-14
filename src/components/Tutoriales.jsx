import {useState,useEffect} from 'react';
import Categoria from './categoria';
import styled from "styled-components";
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import fondoHex from './imgs/fondoHexagonos.jpg'
import axios from 'axios'
import compartir from "./imgs/compartir.png"



const Titulovideos=styled.h1`
font-size: 44px;
color: #f5b041;

`;


let Reproductor=styled.div`
width:100%;
@media (max-width:900px){
	display:none;}`



const Descripcionvideos=styled.div`
font-size: 20px;
color:#01578c;
position:absolute;
text-align:right;
padding:15px;
width:64vw
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
const Compartir=styled.img`
height:55px;
position:relative;
`;








export default function Tutoriales(){
let [data,setData]=useState([]);
let isLogin=useSelector(state=>state.isloguin)
let navigate=useNavigate();

const [width, setWidth] = useState(window.innerWidth);



useEffect(()=>{        
if(isLogin==="false"||isLogin===false) {navigate("/")};

axios("farmasistutorials")
.then(datos=>datos.data)
.then(datos=>setData(datos));

 const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    
    };
 
  },[ isLogin,navigate]);

 
if(width<900){
let rep=document.getElementById("reproductor");
rep?rep.pause():console.log("no video");
};


let titulo=useSelector((state)=>state.titulo);
let descripcion=useSelector((state)=>state.descripcion);
let url=useSelector((state)=>state.url);

return	(	
   <ContenedorVideos >
	<Categoria data={data} />
	<Reproductor >
		{titulo?<Titulovideos>{titulo}</Titulovideos>:null}
		{url?<div style={{display:"flex",alignItems: "baseline",position:"relative",left:"16%",}}>
		       <video id="reproductor" style={ {width:"60%",position:"relative"}}controls="controls" src={url}/>
             <Compartir src={compartir} />
           </div>:null}
		{descripcion?<Descripcionvideos><b>{descripcion}</b></Descripcionvideos>:null}
	</Reproductor>
	</ContenedorVideos>
)
}