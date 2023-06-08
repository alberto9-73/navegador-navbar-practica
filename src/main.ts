import {crearClient, getUsuarios} from './interface/clientes.service'
import { Icliente } from './interface/interfacecliente';
import { generarTablaUsuarios } from './interface/tabla';

const app = document.querySelector<HTMLDivElement>('#app');
const home = document.querySelector<HTMLAnchorElement>('#home');
const clientes = document.querySelector<HTMLAnchorElement>('#clientes');
const crearCliente = document.querySelector<HTMLAnchorElement>('#crearCliente');


//const btn= document.querySelector<HTMLAnchorElement>('#boton');

document.querySelector<HTMLDivElement>('#app')!.innerHTML =
	`<h1>BIENVENIDOS AL PORTAL DE CLIENTES</h1
<h2>¿Qué es un cliente?</h2>
`

home?.addEventListener('click', () => {
	app!.innerHTML = `<h2>La definición de cliente e importancia en las empresas.</h2><br>
	<p>Hay empresas que ven a sus clientes solo como consumidores, y de ellos solo esperan que adquieran más productos, por los precios más altos. Otras organizaciones tienen una visión más amplia y asumen que sus clientes pueden ser también sus aliados e incluso darles información tan valiosa como si fueran colaboradores.
	
	Entonces, ¿qué es un cliente? Aquí abordaremos tanto la definición clásica como todos los roles que puede cumplir para tu empresa si aprovechas todo su potencial. ¡Comencemos!</p>`;

	// TODO: optimizar
	clientes!.classList.remove('active');
	crearCliente!.classList.remove('active');
	home!.classList.add('active');
});
clientes?.addEventListener('click',async () => {
	app!.innerHTML = `<div id="divTablaUsuarios"></div>`;

	const divTabla = document.querySelector<HTMLDivElement>('#divTablaUsuarios')!;
	// obtengo usuarios de la api
	 
	const usuarios = await getUsuarios();
	
	//genero la tabla de usuarios con los datos obtenidos de la api y le paso el div de la tabla
	generarTablaUsuarios(usuarios, divTabla);



	// TODO: optimizar
	home!.classList.remove('active');
	crearCliente!.classList.remove('active');
	clientes!.classList.add('active');
});

crearCliente?.addEventListener('click', () => {
	
	app!.innerHTML = `
<div class="body_formulario">
<h2 class="title"><u>Crear cliente</u></h2>

<h3 class="title"><u>Ingersa tus datos</u></h3><br>
<form id="formulario">

<div class="put">
<div class="input-group input-group-sm mb-3" >
<span class="input-group-text">NOMBRE</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="nombre">
<span id="nombre" class="error"> </span>
</div>

<div class="input-group input-group-sm mb-3">
<span class="input-group-text" id="inputGroup-sizing-sm">APELLIDO</span>
<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="apellido">
<span id="apellido"class="error" > </span>
</div>

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Número de Teléfono</span>
  <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="numero">
<span id="numero" class="error"></span>
  </div>

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Empresa</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="empresa">
  <span id="empresa" class="error"></span>
 </div>

 <div class="input-group input-group-sm mb-3">
 <span class="input-group-text" id="inputGroup-sizing-sm">Cuil/Cuit</span>
 <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="cuit">
<span id="cuit" class="error"></span>
 </div>

<div>
	<select "form-select form-select-sm" class="sel" aria-label="Ejemplo de .form-select-sm" id="pais">
	<option selected value="seleccionar">Seleccionar país</option>
	<option value="argentina">Argentina</option>
	<option value="paraguay">Paraguay</option>
	<option value="chile">Chile</option>
	<option value="brasil">Brasil</option>
	<option value="colombia">Colombia</option>
	<option value="españa">España</option>
	<option value="urugay">Uruguay</option>
  </select>
  
  </div>
  <br>
  <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Localidad</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="localidad">
  <span id="localidad"class="error"></span>
  </div>

<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Código postal</span>
  <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="postal">
  <span id="postal" class="error"></span>
  </div>


<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Dirección</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="direccion">
  <span id="direccion"class="error"></span>
  </div>

  <u> <p class="ok" id="mensaje"></p></u>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="submit" id="boton">Guardar</button>
  
</div><br>

</div>

</form>
</div>
	  `
	
	//const formulario: any = document.querySelector<HTMLAnchorElement>('#formulrio')!;
	const nombreInput: any = document.querySelector<HTMLInputElement>("#nombre")!;
	const apellidoInput: any = document.querySelector<HTMLInputElement>("#apellido")!;
	const telefono: any = document.querySelector<HTMLInputElement>("#numero")!;
	const empresaInput: any = document.querySelector<HTMLInputElement>("#empresa")!;
	const cuilInput: any = document.querySelector<HTMLInputElement>("#cuit")!;
	const paisInput: any = document.querySelector<HTMLInputElement>('#pais')!;
	const localidadInput: any = document.querySelector<HTMLInputElement>("#localidad")!;
	const codigoPostal: any = document.querySelector<HTMLInputElement>("#postal")!;
	const direccionInput: any = document.querySelector<HTMLInputElement>("#direccion")!;
	

	const validador = (nom: any) => {
		const valido = nom.target;
		const validoValue: any = nom.target.value;
		if (validoValue.length <= 2) {
			valido.nextElementSibling.innerText = "Complete el campo";
		} else {
			valido.nextElementSibling.innerText = "";
		}
	}
	nombreInput.addEventListener('blur', validador);
	apellidoInput.addEventListener('blur', validador);
	empresaInput.addEventListener('blur', validador);
	direccionInput.addEventListener('blur', validador);
	localidadInput.addEventListener('blur', validador);


	const validadorNumero = (nom: any) => {
		const numero = nom.target;
		const numeroValue: any = nom.target.value;
		if (numeroValue.length == 0) {
			numero.nextElementSibling.innerText = "Complete el campo";
		}
		else if (numeroValue.length <= 3) {
			numero.nextElementSibling.innerText = "valor incorrecto";
		}
		else if (numeroValue.length > 10) {
			numero.nextElementSibling.innerText = "valor incorrecto";
		}

		else {
			numero.nextElementSibling.innerText = "";
		}
	}
	telefono.addEventListener('blur', validadorNumero);
	codigoPostal.addEventListener('blur', validadorNumero);
	cuilInput.addEventListener('blur', validadorNumero);

	const btn = document.querySelector<HTMLAnchorElement>('#boton')!;
	btn!.addEventListener('click', (e) => {
		e.preventDefault();
		if (nombreInput.value != "" && apellidoInput.value != "" && telefono.value != 0 && empresaInput.value != "" && cuilInput.value != 0 && paisInput.value != "seleccionar" && localidadInput.value != "" && codigoPostal.value != 0 && direccionInput) {
			const cliente:Icliente = {
				nombre: nombreInput.value.toUpperCase(),
				apellido: apellidoInput.value.toUpperCase(),
				numeroTelefono: Number(telefono.value),
				empresa: empresaInput.value.toUpperCase(),
				cuitCuil: cuilInput.value,
				pais: paisInput.value.toUpperCase(),
				localidad: localidadInput.value.toUpperCase(),
				codPostal: codigoPostal.value,
				direccion: direccionInput.value.toUpperCase()
			}
//llamar a la funcion post de axios
crearClient(cliente)
			//console.log(cliente)
			document.querySelector<HTMLAnchorElement>('#mensaje')!.innerHTML=`<p>Formulario enviado correctamente!!!</p>`	
			
		} else {
			alert('Todos los campos se deben completar')
		}
		
	});

	// TODO: optimizar
	home!.classList.remove('active');
	clientes!.classList.remove('active');
	crearCliente!.classList.add('active');
});




