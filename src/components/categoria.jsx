
import Lista from './lista';
import styled from "styled-components";
import {useSelector} from 'react-redux';


const IndiceStyle=styled.div`
overflow-y:auto;
&::-webkit-scrollbar{background-color:white;width:3px};
::-webkit-scrollbar-thumb{background:#01578c;border-radius:25px};
::-webkit-scrollbar:horizontal{display:none}


width:28vw;
min-width:370px;
@media (max-width:900px){
	width:100%;
}
`




export default function Categoria(props){
let player=""+useSelector(state=>state.player);



return(

<IndiceStyle style={{height:player==="true"?"400px":"610px"}}>{props.data.map( grupo=><Lista  lista={grupo} /> )}</IndiceStyle>

	)


}