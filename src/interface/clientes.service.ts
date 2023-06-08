// 1. instalar axios
// 2. crear interface iUsuario
// 3. crear archivo usuarioService.ts
// 	 a. crear funcion que reciba como parametro un obj de tipo iUsuario y envie 
//      con axios utilizando el metodo post a el endpoint correspondiste de la siguiente api
//  https://api-user-production.up.railway.app/api

import axios from "axios";
import { Icliente } from "./interfacecliente";
const URL='https://api-user-production.up.railway.app';
//export const getClientes= async ():Promise<Icliente[]>=>{   
//};
export const crearClient=async(c:Icliente)=>{
    const response= await axios.post(`${URL}/usuarios`,c);
    const data: Icliente= response.data
    if(response.status !=201){
      return  console.error('Fallo la llamada a la api crear cliente')
    }
    return console.log(`Se creo el cliente con id ${data.id}`);
};



export  const  getUsuarios = async (): Promise<Icliente[]> => {
	const { data } = await axios.get<Icliente[]>(`${URL}/usuarios`);

	return data;

};






