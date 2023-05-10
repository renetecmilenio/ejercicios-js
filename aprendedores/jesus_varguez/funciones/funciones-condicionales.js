/* function unaFuncionQueDevuelveValor() {
    console.log("Uno");
    return 19;
    console.log("Dos");
    console.log("Tres");
    return "La función ha retornado una Cadena de texto";
  } 

    let valorDeFuncion = unaFuncionQueDevuelveValor();

    console.log(valorDeFuncion);
*/

// funcionExpresada();

// const funcionExpresada = function () {
//   console.log(
//     "Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'"
//   );
// };

/*
    Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

    Las funciones en JavaScript son objetos, un tipo especial de objetos:

    Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
    */

//Declaración de función
/*  function estoEsUnaFuncion() {
       console.log("Uno");
       console.log("Dos");
       console.log("Tres");
     } */

//Invocación de función
/* estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion(); */

/* function unaFuncionQueDevuelveValor() {
      console.log("Uno");
      return 19;
      console.log("Dos");
      console.log("Tres");
      return "La función ha retornado una Cadena de texto";
    } */

//let valorDeFuncion = unaFuncionQueDevuelveValor();

//console.log(valorDeFuncion);

/*  function saludar(nombre = "Desconocido", edad = 0) {
       console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
     } */

//saludar("Rene", 33);
//saludar();

//Funciones declaradas VS funciones expresadas

//funcionDeclarada();

/* function funcionDeclarada() {
      console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
    } */

//funcionDeclarada();

//funcionExpresada();

//función anónima
/* const funcionExpresada = function () {
      console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
    } */

//funcionExpresada();

// let i = 2;

// console.log(i++);
// console.log(++i);

// let x = 5;
// x--;

// console.log(x)




/*
    = 1 igual es asignación  de variable
    == 2 iguales es comparacion de valores
    === 3 igulaes es comparación de tipo de dato y de valor
    */

//     console.log(7 == 7);
//     console.log("7" == 7);
//     console.log(0 == false);

// console.log("----")

//     console.log(7 === 7);
//     console.log("7" === 7);
//     console.log(0 === false);

   /* **********     Curso JavaScript: 29. Operador de Cortocircuito -     ********** */
    /*
    Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto

    Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
     */
    /*  function saludar(nombre) {
       nombre = nombre || "Desconocido";
       console.log(`Hola ${nombre}`);
     }

     saludar("rene");
     saludar();

     console.log("cadena" || "Valor de la derecha");
     console.log(19 || "Valor de la derecha");
     console.log(true || "Valor de la derecha");
     console.log([] || "Valor de la derecha");
     console.log({} || "Valor de la derecha");
     console.log(false || "Valor de la derecha");
     console.log(null || "Valor de la derecha");
     console.log(undefined || "Valor de la derecha");
     console.log("" || "Valor de la derecha");
     console.log(-2 || "Valor de la derecha");
     console.log(0 || "Valor de la derecha");

     console.log(false && "Valor de la derecha");
     console.log(null && "Valor de la derecha");
     console.log(undefined && "Valor de la derecha");
     console.log("" && "Valor de la derecha");
     console.log(-2 && "Valor de la derecha");
     console.log(0 && "Valor de la derecha");

     console.log("cadena" && "Valor de la derecha");
     console.log(19 && "Valor de la derecha");
     console.log(true && "Valor de la derecha");
     console.log([] && "Valor de la derecha");
     console.log({} && "Valor de la derecha"); */

     

/*
Lógicos
! - Not : Niega, es decir lo que es verdadero lo vuelve falso y viceversa
|| - Or: Cuando tengo 2 o más condiciones, con que una se cumpla, es decir sea verdadera, el OR será verdadero.
&& - And: Cuando tengo 2 o más condiciones, todas tienen que cumplirse, es decir ser verdaderas, para que AND se valide */

// console.log(!true);
// console.log(!false);
// console.log((9 === 9) || ("9" === 9));
// console.log((9 === 9) && ("9" === 9));
// console.log((9 === 9) && ("9" === "9"));

/* **********     Condicionales -     ********** */

/* if - else */

//let edad = 9;

//     if (edad > 17) {
//       console.log("Eres mayor de Edad");
//     } else {
//       console.log("Eres menor de Edad");
//     }

//     if (edad >= 18) {
//       console.log("Eres mayor de Edad");
//     } else {
//       console.log("Eres menor de Edad");
//     }

//     if (edad < 18) {
//       console.log("Eres menor de Edad");
//     } else {
//       console.log("Eres mayor de Edad");
//     }

//     if (edad <= 17) {
//       console.log("Eres menor de Edad");
//     } else {
//       console.log("Eres mayor de Edad");
//     }

/* if - else if - else */
/*
      Déjame Dormir - 0hrs - 5hrs
      Buenos dias 6hrs - 11hrs
      Buenas tardes 12hrs - 18hrs
      Buenas noches 19hrs - 23hrs
    */
//    let hora = 23;

//     if (hora >= 0 && hora <= 5) {
//       console.log("Déjame dormir");
//     } else if (hora >= 6 && hora <= 11) {
//       console.log("Buenos días");
//     } else if (hora >= 12 && hora <= 18) {
//       console.log("Buenas tardes");
//     } else {
//       console.log("Buenas noches");
//     }

//     if (hora < 6) {
//       console.log("Déjame dormir");
//     } else if (hora > 5 && hora < 12) {
//       console.log("Buenos días");
//     } else if (hora > 11 && hora < 19) {
//       console.log("Buenas tardes");
//     } else {
//       console.log("Buenas noches");
//     }

/* Operador Ternario (condición) ? verdadero : falsa */

//  console.log("Operador Ternario");

// let edad = 18;
// let eresMayor = (edad >= 18)
// ? "Eres mayor de Edad" 
// : "Eres menor de Edad";
// console.log(eresMayor);

/* switch - case */
/*
    domingo -0
    lunes - 1
    martes - 2
    miércoles - 3
    jueves - 4
    viernes - 5
    sábado - 6
    */



let dia = 4;

    switch (dia) {
      case 0:
        console.log("Domingo");
        break;
      case 1:
        console.log("Lunes");
        break;
      case 2:
        console.log("Martes");
        break;
      case 3:
        console.log("Miércoles");
        break;
      case 4:
        console.log("Jueves");
        break;
      case 5:
        console.log("Viernes");
        break;
      case 6:
        console.log("Sábado");
        break;
      default:
        console.log("El día no existe");
        break;
    }


    function estoEsUnaFuncion() {
        console.log("Uno");
        console.log("Dos");
        console.log("Tres");
      }

      // se puede ejecutar cuantas veces quieran y necesiten en su aplicación
    estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion(); 