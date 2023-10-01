/*
Micro desafío 3:

Instrucciones
1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa traductor condicional. La idea es que si el usuario ingresa
una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le devuelva la
misma palabra traducida al idioma inglés. Te recomendamos usar la estructura
switch. Puedes ayudarte con Google Traductor.
En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario un mensaje
que le informe que “La palabra ingresada es incorrecta”.
*/

let palabra="gato";
switch (palabra)
    {
        case "perro":
            console.log("perro en ingles, se escribe: dog");
            break;
        case "gato":
            console.log("gato en ingles, se escribe: cat");
            break;
        case "puerta":
            console.log("puerta en ingles, se escribe: door");
            break;
        case "ventana":
            console.log("ventana en ingles, se escribe: windows");
            break;
        case "mesa":
            console.log("mesa en ingles, se escribe: table");
            break;
        default:
            console.log("La palabra ingresada es incorrecta");
    }