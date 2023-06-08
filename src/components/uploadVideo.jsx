import {useState,useEffect} from "react"
import axios from "axios"
import {ImputsReferidos,Formulario,ButonStyle,ErrorValidacion} from "./referidos.jsx"
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'

export default function Upload(){
const [categorias,setCategorias]=useState([]);
const [validacion,setValidacion]=useState({nombre:false,descripcion:false,categoria:false,video:false,nuevaCategoria:false});
let isLogin=useSelector(state=>state.isloguin);
let navigate=useNavigate();


useEffect(()=>{
if(isLogin==="false"||isLogin===false) {navigate("/")};  
axios("/categorias")
.then(datos=>datos.data)
.then(datos=>setCategorias(datos));

},[isLogin,navigate]  );


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
	if(validacion.nombre&&validacion.descripcion&&validacion.video)	{return true} else return false;
	
case false:
	if(validacion.nombre&&validacion.descripcion&&validacion.nuevaCategoria){return true} else return false;
	
default: return false
	}
};

let sendVideo=async(e)=>{e.preventDefault();


if (readyForSend()){
navigate("/Home/Tutoriales");
alert("tutorial en carga, se notificara en cuanto termine la carga" );
	

let nombre=document.getElementById("nombre").value;
let descripcion=document.getElementById("descripcion").value;
let categoria=document.getElementById("categoria").value;
let video=document.getElementById("video").files[0];
let nuevaCategoria=document.getElementById("nuevaCategoria").value;

console.log(video.filename);
const form = new FormData();
form.append("nombre",nombre);
form.append("descripcion",descripcion);
categoria===0?form.append("categoria",nuevaCategoria):form.append("categoria",categoria);
form.append("video",video);



const datosCompletos=Object.fromEntries(form.entries());

await axios.post(axios.defaults.baseURL+'/farmasistutorials/',datosCompletos, {headers: {"Content-Type": "multipart/form-data"} })
.then(res=>{alert("tutorial correctamente subido" );console.log(res.data)})
 .catch((err) => (console.log("Error occured: " + err)));
}


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