import React from 'react';
import Select from 'react-select';



const demo=[
	{label:"farmacia1",value:"farmacia1"},
	{label:"farmacia2",value:"farmacia2"},
	{label:"farmacia3",value:"farmacia3"},
	{label:"farmacia4",value:"farmacia4"},
	{label:"farmacia5",value:"farmacia5"},
	{label:"farmacia6",value:"farmacia6"},
	{label:"farmacia7",value:"farmacia7"}
	];





	 

export default function ComboSearch(){


return(<div >
	<Select  defaultValue={{label:"---seleccionar---", value:"null"}}
	options ={demo} 
	 />



</div>


	)

}