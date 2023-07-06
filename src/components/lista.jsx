import Titulo from './titulo'; 
import icon from "./imgs/icon.ico";
import styled from "styled-components";

const icoStyle={
width: "14px",
height: "14px" ,
display:"inline"
}

const GrupoStylo=styled.h3`
color:#01578c;
display:inline;
font-size:25px;
@media (max-width:450px){
    font-size:15px;}

`

const ListaStyle=styled.ul`
@media (max-width:900px){
    padding:0px;}
`




export default function Lista(props){

let nameGroup="";
for (let tit in props.lista){ nameGroup=tit };

return(
 <ListaStyle >  
<img src={icon} alt="icono farmasis" style={icoStyle}/>
<GrupoStylo>{nameGroup}</GrupoStylo>
<Titulo  objeto={props.lista[nameGroup]} />
 </ListaStyle> 

)
}

