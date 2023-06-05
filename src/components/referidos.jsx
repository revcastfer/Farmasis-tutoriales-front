import React from 'react';
import styled from "styled-components";
import RefeImagen from './imgs/referidos.jpeg'
import RefeImagencompleta from './imgs/referidosCompleto.jpeg'
import fondoHex from './imgs/fondoHexagonos.jpg'
import axios from 'axios'





const ErrorValidacion=styled.span`color:red;font-size:13px;display:inline;visibility:hidden`;


const Formulario=styled.form`
width:50%;
position:relative;
background-image:url(${fondoHex});
background-size:contain`;

const ImputsReferidos=styled.input`
display:inline;
margin:15px;
height:30px;
width:50%;
border-radius:10px;
border: 1px solid grey`;

const TipoDatos=styled.div`
color:#09b5c1;
font-size:20px`; 

const ButonStyle=styled.button`  
width: 80px;
padding:8px;
border-radius:8px;
border:none;
background-color:#09b5c1;
display:block

`


const Contenedor=styled.div`
display:flex;
min-height:600px;
`



const ImagenesDerecha=styled.div`
display:flex;
background-size:cover;
background-repeat:no-repeat;
width:50%;
height:0px

justify-content:center;
background-image:url(${RefeImagencompleta});
@media (max-width:900px){
background-image:url(${RefeImagen});
right:0px}
`

const formCentrar={position:"absolute",left:"8%", top:"7%",
width:"100%"}









  export default function Referidos(){


let readyForSend=[0,0,0,0,0,0,0]
let ValidateReadyForSend=()=>{
	const suma = readyForSend.reduce((anterior, actual) => anterior + actual, 0);
     if(suma===7){return true} else return false};


let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let numero=document.getElementById("numero");
let relacion=document.getElementById("relacion");
let nombreReferido=document.getElementById("nombreReferido");
let apellidoReferido=document.getElementById("apellidoReferido");
let numeroReferido=document.getElementById("numeroReferido");



let validate=(e)=>{
let validarNoNumeros=new RegExp('[0-9]');
let validarLetras=new RegExp('[a-zA-Z]');

let nombreVal=document.getElementById("nombreVal");
let apellidoVal=document.getElementById("apellidoVal");
let numeroVal=document.getElementById("numeroVal");
let relacionVal=document.getElementById("relacionVal");
let nombreReferidoVal=document.getElementById("nombreReferidoVal");
let apellidoReferidoVal=document.getElementById("apellidoReferidoVal");
let numeroReferidoVal=document.getElementById("numeroReferidoVal");


let valor=e.target.value;
let id=e.target.id;

switch(id){
case "nombre":
if(validarNoNumeros.test(valor)||nombre.value===""||nombre.value===" "){nombreVal.style.visibility="visible";readyForSend[1]=0}else{nombreVal.style.visibility="hidden";readyForSend[1]=1};
break;
case "apellido":
if(validarNoNumeros.test(valor)||apellido.value===""||apellido.value===" "){apellidoVal.style.visibility="visible";readyForSend[2]=0}else{apellidoVal.style.visibility="hidden";readyForSend[2]=1};
break;
case "relacion":
if(validarNoNumeros.test(valor)||relacion.value===""||relacion.value===" "){relacionVal.style.visibility="visible";readyForSend[3]=0}else{relacionVal.style.visibility="hidden";readyForSend[3]=1};
break;
case "nombreReferido":
if(validarNoNumeros.test(valor)||nombreReferido.value===""||nombreReferido.value===" "){nombreReferidoVal.style.visibility="visible";readyForSend[4]=0}else{nombreReferidoVal.style.visibility="hidden";readyForSend[4]=1};
break;
case "apellidoReferido":
if(validarNoNumeros.test(valor)||apellidoReferido.value===""||apellidoReferido.value===" "){apellidoReferidoVal.style.visibility="visible";readyForSend[5]=0}else{apellidoReferidoVal.style.visibility="hidden";readyForSend[5]=1};
break;
case "numero":
if(validarLetras.test(valor)||numero.value===""||numero.value===" "){numeroVal.style.visibility="visible";readyForSend[6]=0}else{numeroVal.style.visibility="hidden";readyForSend[6]=1};
break;
case "numeroReferido":
if(validarLetras.test(valor)||numeroReferido.value===""||numeroReferido.value===" "){numeroReferidoVal.style.visibility="visible";readyForSend[7]=0}else{numeroReferidoVal.style.visibility="hidden";readyForSend[7]=1};
break;
default: 
}

}


let limpiar=(array)=>{array.forEach(name=>document.getElementById(name).value="")};

let handleSubmit=(e)=>{
e.preventDefault();

if(ValidateReadyForSend()){

axios.post("/referidos",{nombre:nombre.value,
	                                         apellido:apellido.value,
	                                         numero:numero.value,
	                                         relacion:relacion.value,
	                                         nombreReferido:nombreReferido.value,
	                                         apellidoReferido:apellidoReferido.value,
	                                         numeroReferido:numeroReferido.value})
	.then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  alert("DATOS ENVIADOS");
limpiar(["nombre","apellido","numero","relacion","nombreReferido","apellidoReferido","numeroReferido"])



}else{ alert("VERIFICAR DATOS");}




}

	

return(
		

		<Contenedor>
		<Formulario  onSubmit={handleSubmit}>
		<div style={formCentrar}>
		<TipoDatos>tus datos:</TipoDatos>
	    <ImputsReferidos id="nombre" onChange={validate} placeholder="Tus nombres: " type="text"/><ErrorValidacion id="nombreVal">no vacio,sin numeros</ErrorValidacion>
		<ImputsReferidos id="apellido" onChange={validate} placeholder="Tus apellidos:" type="text"/><ErrorValidacion id="apellidoVal">no vacio,verificar apellido</ErrorValidacion>
		<ImputsReferidos id="numero" onChange={validate} placeholder="Tu numero de contacto:" type="tel"/><ErrorValidacion id="numeroVal">no vacio,solo numeros</ErrorValidacion>
		<ImputsReferidos id="relacion" onChange={validate} placeholder="Tu relacion con el referido:" type="text"/><ErrorValidacion id="relacionVal">no vacio,verificar relacion</ErrorValidacion>
		<TipoDatos>datos del referido:</TipoDatos>
		<ImputsReferidos id="nombreReferido" onChange={validate} placeholder="Nombre del referido:" type="text"/><ErrorValidacion id="nombreReferidoVal">no vacio,verificar nombre</ErrorValidacion>
		<ImputsReferidos id="apellidoReferido" onChange={validate} placeholder="Apellido del referido" type="text"/><ErrorValidacion id="apellidoReferidoVal">no vacio,verificar apellido</ErrorValidacion>
		<ImputsReferidos id="numeroReferido" onChange={validate} placeholder="Numero de contacto del referido" type="phone"/><ErrorValidacion id="numeroReferidoVal">no vacio,solo numeros</ErrorValidacion>
		<ButonStyle >enviar</ButonStyle>
		</div>

		</Formulario>

		<ImagenesDerecha>
		
		</ImagenesDerecha>



		</Contenedor>


		
		)
}

export {Referidos,ImputsReferidos,Formulario,ButonStyle,ErrorValidacion}