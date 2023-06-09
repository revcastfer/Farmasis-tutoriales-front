import axios from 'axios'

let localIsLogin=window.localStorage.getItem("isloguin");
let localUser=window.localStorage.getItem("usuario");




const initialState= {isloguin:localIsLogin,usuario:localUser,titulo:"",
descripcion:"",url:"",player:false}; 

export default function reducer(state= initialState,action){
	switch(action.type){

     case 'loguin':
		
			window.localStorage.setItem("isloguin",true);
			window.localStorage.setItem('usuario',action.payload);		
		return {...state, usuario:action.payload,isloguin:true,};

	  case 'logout':

		   window.localStorage.setItem("isloguin",false);
		   window.localStorage.removeItem('usuario');
	         return {...state,isloguin:false,usuario:null};

	   case 'select':

	   	    return{...state,titulo:action.payload.name,
	   	          descripcion:action.payload.descrip,
	   	                          url:axios.defaults.baseURL+action.payload.video}

	   case 'player':

	   	    return {...state,player:action.payload}



	 default:
      return state}


	}




