
/* empieza 
 function ingresoDatos(mensaje) {
    let dato = prompt(mensaje);
    console.log(dato);
    return dato;
}

let usuario = ingresoDatos("Ingrese su Nombre y Apellido");
let sueldo = ingresoDatos("Ingrese su sueldo neto en pesos");
let porcentaje = ingresoDatos ("Ingrese el porcentaje de su sueldo que le gustaria destinar a DCA en Crypto");
let total = (sueldo/100)*porcentaje;
 

function login(){
if(!usuario || !sueldo || !porcentaje){
    alert("Por Favor Ingresa todos los datos requeridos")
}else{
    alert("Bienvenido " + usuario + ", segun los datos proporcionados te gustaria destinar $" + total + " de tu sueldo mensual a cryptomonedas, la cotizacion de BTC de hoy, acumularias la cantidad de _____ por mes");
}};

login();  termina */


//Objeto
/* const datosUsuario = {
    Nombre: usuario ,
    Sueldo: sueldo ,
    Porcentaje:porcentaje,
    Total: (sueldo/100)*porcentaje,

    
};

console.log(datosUsuario); */



//activar si es necesario:
/* console.log(datosUsuario.Nombre);
console.log(datosUsuario.Sueldo);
console.log(datosUsuario.Porcentaje);
console.log(datosUsuario.Total); */

//Arrays Activado



/*  empieza 
const datosUsuario = [usuario, sueldo , porcentaje,total ];

console.log(datosUsuario);
//Mostrar el Total a destinar:
console.log(datosUsuario[3]); 
 termina*/

 



 const divContenedor = document.getElementById("content2");
 divContenedor.innerHTML="<p>  </p>"

 const inputNombre = document.getElementById("nombre");

 const btnEnviar = document.querySelector("#enviar");

 btnEnviar.addEventListener("click", ()=>{
     divContenedor.innerText= "Bienvenido/a " + inputNombre.value 

     
 }


 )


  const divContenedor2 = document.getElementById("content5");

 divContenedor2.innerHTML="<p> </p>"

 const inputSueldo = document.getElementById("sueldo");

 const btnEnviar1 = document.querySelector("#enviar1");

 btnEnviar1.addEventListener("click", ()=>{
    divContenedor2.innerText= "Su Sueldo es de $ " + inputSueldo.value 
})


const divContenedor3 = document.getElementById("content8");

divContenedor3.innerHTML="<p>   </p>"

const inputDca = document.getElementById("dca");

const btnEnviar2 = document.querySelector("#enviar2");

btnEnviar2.addEventListener("click", ()=>{
   divContenedor3.innerText= "El porcentaje seleccionado para DCA es  " + inputDca.value +"%"
})

const divContenedor4 = document.getElementById("content9");
divContenedor4.innerHTML="<p> El Total es </p>"
const btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener("click",()=>{
    divContenedor4.innerText= "El total a destinar a crypto es $" + inputSueldo.value/100 * inputDca.value
})

// Creacion de Login almacenando datos en localStorage y mostrando en Consola, Desafio




const login = e =>{
    let datosFormulario ={

        email: document.getElementById("email").value,
        password: document.getElementById("password").value,

        

    }

   

    localStorage.setItem("datosFormulario",JSON.stringify(datosFormulario))
    console.log(localStorage.getItem("datosFormulario"));
}


// Utilizando libreria sweetalert2 al hacer click en registrarse

const btnAlert = document.querySelector("#btnAlert")

btnAlert.addEventListener("click", ()=>{
    
    Swal.fire(
  'Bien Hecho',
  'Te has registrado Exitosamente',
  'success'
)
});


//utilizando libreria tostify para un link a precios en vivo de Crypto Monedas

Toastify({
    text: "Click aqui para Ver Precios Crypto minuto a minuto",
    duration: 18000,
    destination: "https://coinmarketcap.com/",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, rgb(44, 19, 19),rgb(255,215,0))",
    },
    onClick: function(){} // Callback after click
  }).showToast();

   

const formCaja = document.querySelector(".formCaja");
const inputNombre1 = document.querySelector("#busquedaNombre");
const inputId = document.querySelector("#busquedaId");

const caja = document.querySelector(".caja")



const escucharInputs = ()=>{
    inputId.oninput =()=>{
        inputNombre1.value= "";
    };
    inputNombre1.oninput = () =>{
        inputId.value = "";
    };
    
};


// A continuacion utilizaremos la busqueda del simbolo de la crypto, se modificara el DOM y ademas podremos ver por consola los resultados. En este caso utilizamos la API de Coingecko para acceder a todos los detalles, tambien se podria aplicar para reflejar precios en el DOM pero para esto ya tenemos un link directo en el margen superior central .


const buscarPorId=(id)=>{
    
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

.then((response)=>response.json())
.then((data)=>{
    if(data.error){
        throw new Error("No es una Cryto");
    }else{
        caja.innerHTML = `<div>
        <p>"${data.symbol}"<p/>
        
        </div>`
        console.log(data)
    }
    }).catch(error=>console.warn(error));
} 




 const escucharForm = ()=>{
formCaja.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(inputNombre1.value ===""){
        buscarPorId(inputId.value)
        
      
       
    }else
    {
        
       

    }
});
}
escucharInputs();
escucharForm(); 





