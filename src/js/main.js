// const hola = alert({"Hola"})
// console.log(hola)

// const res = confirm("Estas seguro?")

// // console.log(res)


// function saludar(grupo) { //parametro parámetro representa un valor que el procedimiento espera que se pase al llamarlo. La declaración del procedimiento define sus parámetros.
//     console.log("hola" , grupo)
// }

// saludar("mundo") //argumento : representa el valor que se pasa a un parámetro de procedimiento al llamar a este último


// function notificacionSaludar(coder) {
//     console.log(`Hola ${coder} 👋🏻`)

// }

// function notificacionDespedir(coder){
//     console.log(`Lamentamos indicarte  ${coder} que estas despedido 😡`)
// }


// notificacionSaludar("Juan")
// notificacionDespedir("Juan")

    let user = "admin"
    let pass = 12345

function login(user,pass) {

    // let user = prompt("Ingrese su user")

    if (user === "admin" && pass === 12345) {
        console.log(`Bienvenido ${user}`)
        
    }
    else{
        console.log("Usuario o contraseña incorrectos")
        alert("Usuario o contraseña incorrectos")
    }
}

login("admin",12345)


function uno() {
    console.log("Esta es una funcion declativa")
}

const dos = function() {
    console.log("Esta es una funcion expresiva")
}