export function loguin(usuario){return {type:'loguin',payload:usuario} };
export function logout(){return {type:'logout'} }; 
export function selectVideo(obj){return {type:'select', payload:obj}};
export function playerChange(valor){return {type:'player', payload:valor}};
