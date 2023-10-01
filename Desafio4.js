/*
Micro desafío 4:
Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
hará en base a dos valores suministrados y al tipo de operación indicada:
“sumar”, “restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle
un mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar
- restar- multiplicar- dividir”.
A continuación te dejamos un diagrama de flujo, para que te des una idea de la lógica que
podemos encontrar en una calculadora. Recordá igualmente que en tu caso debes usar la
estructura switch
*/

let num1=5;
let num2=3;
let operacion= "potencia";
switch (operacion)
    {
        case "sumar":
            console.log("El resultado de sumar "+num1+" + "+num2+" es "+(num1+num2));
        break;
        case "restar":
            console.log("El resultado de restar "+num1+" - "+num2+" es "+(num1-num2));
        break;
        case "multiplicar":
            console.log("El resultado de multiplicar "+num1+" * "+num2+" es "+(num1*num2));
        break;
        case "dividir":
            console.log("El resultado de dividir "+num1+" / "+num2+" es "+(num1/num2));
        break;
        default:
            console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir");
    }

/*let num1=9;
let num2=3;
let operacion= "dividir";
let resultado;
console.log("Los numeros con los que trabajaremos son: "+num1+" y "+num2);
console.log("La operacion con la que trabajaremos es: "+operacion);
switch (operacion)
    {
        case "sumar":
            resultado=num1+num2;
        break;
        case "restar":
            resultado=num1-num2;
        break;
        case "multiplicar":
            resultado=num1*num2;
        break;
        case "dividir":
            resultado=num1/num2;
        break;
        default:
            console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir");
    }
console.log("El resultado de operar, es: "+resultado);*/