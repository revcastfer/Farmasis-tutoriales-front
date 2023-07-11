import {useDispatch,useSelector} from 'react-redux';
import {selectVideo} from './redux/actions';
import styled from "styled-components";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import {playerChange} from "./redux/actions"


//videos debajo titulo a menos de 900px
const VideoDiv=styled.div`
display:block;
position:relative;
@media (min-width:900px){
	display:none;
}

`
//menu a mas de 900px
const MenuStyle=styled.li`
display:flex;
font-size:20px;
color:grey;
padding:5px;
cursor: pointer;
@media screen and (max-width:900px){
	display:none;
}

 `
//menu a menos de 900-500px
const MenuStyle2=styled.li`

display:flex;
font-size:25px;
color:grey;
cursor: default;
width:100vw;
padding:0px 0px 10px 15px;

@media (max-width:500px){
    font-size:12px}
@media screen and (min-width:900px){
	display:none
}

 `

const VideoLink=styled.video`
width:100vw;

`;

const Descripcion=styled.div`
font-size:8px;
color:red;
width:80%;
text-align:center;
@media (min-width:500px){
    font-size:13px}
`;




export default function Titulo(props){

let dispatch=useDispatch();
let navigate=useNavigate();
const  player=useSelector(state=>state.player);




let search=(titulo)=>{
for (let obj in props.objeto){if(props.objeto[obj].name===titulo ){
	return props.objeto[obj]}
}
}

function handleClick(name){dispatch(selectVideo(search(name)));
let collection=document.getElementsByClassName(null);

for (let i = 0; i < collection.length; i++) {
            collection[i].style.color="grey";
            collection[i].style.fontWeight='normal'};

 let selected=document.getElementById(name).style;
 selected.color="orange";
 selected.fontWeight='bold' }


let onClick=(e)=>{
	let videoName=e.target.id;
	let videoUrl= e.target.src.split("/")[4];
	dispatch(playerChange("true"));
	navigate("/player/"+videoName+"/"+videoUrl)
	

}



	return(
		<div >
		{  props.objeto.map(  ele=><div key={ele.name}>

			<MenuStyle id={ele.name}  className="null" onClick={()=>handleClick(ele.name)} > {ele.name} </MenuStyle>
			<VideoDiv> 
			  <VideoLink style={{width:"100vw",maxWidth:player?"350px":null}} id={ele.name} onClick={onClick}  src={axios.defaults.baseURL+search(ele.name).video}/>
			</VideoDiv> 
            <MenuStyle2 id={ele.name}   className="null" > {ele.name} 
                         <div style={{display:player==="true"?"none":"flex",justifyContent:"center"}}>
                        <Descripcion >{ele.descrip}</Descripcion> </div>
            </MenuStyle2>
			</div>  )  }
	   </div>)

}