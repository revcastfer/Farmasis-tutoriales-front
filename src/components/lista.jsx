import Titulo from './titulo'; 
import icon from "./imgs/icon.ico";

const icoStyle={
width: "14px",
height: "14px" ,
display:"inline"
}

const grupoStylo={
    color:"#01578c",display:"inline",
    fontSize: "35px",
    padding:"10px",
    margin:"10px"
}

export default function Lista(props){

let nameGroup="";
for (let tit in props.lista){ nameGroup=tit };

return(
 <ul >   <img src={icon} style={icoStyle}/><h3 style={grupoStylo}>{nameGroup}</h3>
<Titulo  objeto={props.lista[nameGroup]} />
 </ul> 

)
}

