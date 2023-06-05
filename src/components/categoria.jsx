
import Lista from './lista';
import styled from "styled-components";


const IndiceStyle=styled.div`
width:100vw`




export default function Categoria(props){


return(

<IndiceStyle style={{overflowY:"scroll",height:"80vh",width:"100%"}}>{props.data.map( grupo=><Lista  lista={grupo} /> )}</IndiceStyle>

	)


}