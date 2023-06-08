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

export const validador = (nom: any) => {
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


export const validadorNumero = (nom: any) => {
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
btn!.addEventListener('click', () => {
    if (nombreInput.value != "" && apellidoInput.value != "" && telefono.value != 0 && empresaInput.value != "" && cuilInput.value != 0 && paisInput.value != "seleccionar" && localidadInput.value != "" && codigoPostal.value != 0 && direccionInput) {
        const cliente = {
            Nombre: nombreInput.value.toUpperCase(),
            Apellido: apellidoInput.value.toUpperCase(),
            numeroTelefono: telefono.value,
            Empresa: empresaInput.value.toUpperCase(),
            cuitCuil: cuilInput.value,
            pais: paisInput.value.toUpperCase(),
            localidad: localidadInput.value.toUpperCase(),
            CodigoPostal: codigoPostal.value,
            Direccion: direccionInput.value.toUpperCase()
        }

        console.log(cliente)
    } else {
        alert('Todos los campos se deben completar')
    }
});


  