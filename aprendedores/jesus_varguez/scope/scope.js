//esta variable se establece fuera de cualquier función
const variableGlobal = "Global"

// función "declarada"
function ejemploScope() {
    //se establece una variable dentro de una función la cual solo esta función tiene acceso a la variable local
    const variableLocal = "Local"
    //se imprime en consola la variable global y local sin errores
    console.log(variableLocal)
    console.log(variableGlobal)
}

//Se invoca o se ejecuta la función con nombre ejemploScope
ejemploScope();

// Esta es otra función pero tipo "expresada" con arrow function se declara dentro de una variable 
let scopeFnExpresada = () => {
    // se declara una variable con el mismo nombre de la anterior variable local 
    const variableLocal = 222
    //se imprimen en consola las variables, la variable local no genera errores porque se define en diferente función
    console.log(variableGlobal)
    console.log(variableLocal)
}

//Se invoca o se ejecuta la función con nombre scopeFnExpresada
scopeFnExpresada();

person = {
    nombre: "René",
    edad: 33,
    estadoCivil: "soltero",
    // en un objeto si se necestia usar una función no se recomienda usar arrow function ya que puede producir errores por la cuestion del hoisting que eleva el objeto this a un ambito global 
   saludo: function saludar() {
        console.log("hola soy " + this.nombre + " y tengo " + this.edad + " años")
    }
}

//se imprime en consola la función saludar del objeto person
console.log(person.saludo())



