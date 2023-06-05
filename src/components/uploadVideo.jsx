import {useState,useEffect} from "react"
import axios from "axios"
import {ImputsReferidos,Formulario,ButonStyle,ErrorValidacion} from "./referidos.jsx"

export default function Upload(){
const [categorias,setCategorias]=useState([]);
const [validacion,setValidacion]=useState({nombre:false,descripcion:false,categoria:false,video:false,nuevaCategoria:false});



useEffect(()=>{
axios("/categorias")
.then(datos=>datos.data)
.then(datos=>setCategorias(datos));

},[]  );


let selectOnChange=(e)=>{
	let nuevaCategoria=document.getElementById("nuevaCategoria"); 
	if(e.target.value===0){nuevaCategoria.style.visibility = "visible";
setValidacion({...validacion,categoria:false})
}else {
	nuevaCategoria.style.visibility = "hidden";
setValidacion({...validacion,categoria:true})
} 

}

let handleChange=(e)=>{

let etiqueta=e.target;
if (etiqueta.value==="") {document.getElementById("error"+ etiqueta.id).style.visibility="visible";
setValidacion({...validacion,[etiqueta.id]:false})}
else{  document.getElementById("error"+ etiqueta.id).style.visibility="hidden";
setValidacion({...validacion,[etiqueta.id]:true}) }

};

let readyForSend=()=>{
	switch(validacion.categoria){
case true:
	if(validacion.nombre&&validacion.descripcion&&validacion.video)	{return true} else {return false};
	break;
case false:
	if(validacion.nombre&&validacion.descripcion&&validacion.nuevaCategoria){return true} else {return false};
	break;
default: return false
	}
};

let sendVideo=(e)=>{e.preventDefault();
if (readyForSend()){

let nombre=document.getElementById("nombre").value;
let descripcion=document.getElementById("descripcion").value;
let categoria=document.getElementById("categoria").value;
let video=document.getElementById("video").files[0];
let nuevaCategoria=document.getElementById("nuevaCategoria").value;


const form = new FormData();
form.append("nombre",nombre);
form.append("descripcion",descripcion);
categoria===0?form.append("categoria",nuevaCategoria):form.append("categoria",categoria);
form.append("video",video);



const datosCompletos=Object.fromEntries(form.entries());

axios.post("http://localhost:3002/farmasistutorials",datosCompletos, {
  headers: {
    "Content-Type": "multipart/form-data"}
  })
 .catch((err) => ("Error occured: " + err));
alert("tutorial correctamente subido")}


else{alert("verificar que todos los campos esten llenos")}



}


	return(
<Formulario enctype='multipart/form-data' style={{width:"500px"}}  onSubmit={sendVideo} >

<ImputsReferidos style={{Width:"100%"}} onChange={handleChange} id="nombre" placeholder="ingrese nombre del video"/><ErrorValidacion id="errornombre">revisar nombre</ErrorValidacion>





<textarea style={{margin:"15px",borderRadius:"5px"}} id="descripcion" onChange={handleChange} rows="5" cols="32"placeholder="escribir la descripcion del video"></textarea>
<ErrorValidacion  id="errordescripcion">ingresar descripcion</ErrorValidacion>
<select  style={{margin:"15px"}} id="categoria"   onChange={selectOnChange}>
<option value="" disabled selected>selecionar categoria</option>
{categorias.map( ele=><option key={ele.id} value={ele.id}>{ele.descrip}</option> )}
<option  value={0}>nueva categoria</option>
</select>
<ErrorValidacion  id="errorcategoria">selecionar categoria</ErrorValidacion>
<ImputsReferidos  id="nuevaCategoria" onChange={handleChange} style={{visibility:"hidden"}} placeholder="ingrese nueva categoria"/><ErrorValidacion id="errornuevaCategoria">ingresar nueva categoria</ErrorValidacion>
<ImputsReferidos id="video" onChange={handleChange} type="file" style={{border:"none",borderRadius:"0px"}}/>
<ErrorValidacion id="errorvideo" >ingresar archivo de video</ErrorValidacion>
<ButonStyle style={{margin:"15px"}}>subir</ButonStyle>
</Formulario>





		)
}