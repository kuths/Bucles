// ejercicio 1
let numeroAMultiplicar = 3

for (let i = 0; i <= 10; i++) {
   console.log(numeroAMultiplicar * i)
}

// ejerrcicio 2
let numeroError = 0

for (let i = 0; i < 10; i++) {
    let numeroAcumulado = parseInt(prompt("Ingrese Numero"))
    if (numeroAcumulado === numeroError) {
        console.log("Error");
        break
    }else{
        console.log(numeroAcumulado)
    }

    }

// ejercicio 3

let adivinanza = 75
let gano = false

for (let i = 0; i < 100; i++) {
    let numeroIngreso = parseInt(prompt("Ingrese un numero"))

    if (numeroIngreso === adivinanza) {
        gano = true
        console.log("ganaste"+ i+ "intentos")
        break;
    } else if (numeroIngreso > adivinanza) {
        alert("Tu numero es mayor")
    } else {
        alert("Tu numero es menor")
    }

}
let numeroIngreasdo = parseInt(prompt("Verifiquemos si tu numero es primo"))
let primo = false
// ejercicio 4
 for (let i = 2; i < numeroIngreasdo ; i++) {
    if (numeroIngreasdo % i === 0) {
        console.log("no es un numero primo")
    } else{
        alert("si es un numero primo")
        break
    }
 }

 // ejercicio 5

 function Divisores(numerop) {
    if (numerop <= 1) {
      return false;
    }
    for (let i = 1; i <= numerop; i++) {
      if (numerop % i === 0) {
        console.log(i);
      }
    }
  }
  console.log(Divisores(12));

// ejercicio 6
  
  let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function conteo(orden) {
  for (let inicio = 0; inicio < orden.length; inicio++) {
    console.log(orden[inicio]);
  }
}
  conteo(arreglo);

// ejercicio 7

  let doble = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function condoble(doble1) {
  for (let inicio = 0; inicio < doble1.length; inicio++) {
    console.log(doble1[inicio] * 2);
  }
}
condoble(doble);

// ejerccio 8

let familiaperez = [
    {
      Nombre: "Eduard",
      Apellidos: "perez rojas",
      Edad: "30",
      Ocupacion: "trader",
    },
    {
      Nombre: "felipe",
      Apellidos: "perez rojas",
      Edad: "20",
      Ocupacion: "Electrico",
    },
    {
      Nombre: "elsa",
      Apellidos: "rojas",
      Edad: "50",
      Ocupacion: "madre",
    },
    {
      Nombre: "jeison",
      Apellidos: "perez",
      Edad: "18",
      Ocupacion: "estudiante",
    },
    {
      Nombre: "alex",
      Apellidos: "perez ",
      Edad: "52",
      Ocupacion: "independiente",
    },
  ];
  
    function datosDeFamilia(familiaperez) {
        console.log("datos  de mi familia:");

        for (let persona of familiaperez) {
          console.log(
            `Hola, soy ${persona.Nombre}, tengo ${persona.Edad} años, y trabajo como ${persona.Ocupacion}.`
          );
        }
      }
      datosDeFamilia(familiaperez);

// ejercicio 9

let arreglo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function impar(impares) {
  for (let inicio = 0; inicio < impares.length; inicio++) {
    if (impares[inicio] % 2 !== 0) {
      console.log(impares[inicio]);
    }
  }
}
impar(arreglo2);

// ejercicio 10

function calsumas() {
    let sumpares = 0;
    let sumimpares = 0;
    while (true) {
      let numero1 = parseInt(prompt("Ingrese su numero"));
  
      if (numero1 === 0) {
        break;
      }
      if (numero1 % 2 === 0) {
        sumpares += numero1;
      } else {
        sumimpares += numero1;
      }
      console.log(`Suma de valores pares: ${sumpares}`);
      console.log(`Suma de valores impares: ${sumimpares}`);
    }
  }
  calsumas();

// ejercicio 11

let arreglo3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function maximo(argl) {
  let maxnum = argl[0];
  for (let inicio = 1; inicio < arreglo3.length; inicio++) {
    if (argl[inicio] > maxnum) {
      maxnum = argl[inicio];
    }
  }
  console.log(`El numero mayor es: ${maxnum}`);
}
maximo(arreglo3);

// ejercicio 12

let arreglo4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function minimo(args) {
  let minnum = args[0];
  for (let inicio = 1; inicio < arreglo4.length; inicio++) {
    if (args[inicio] < minnum) {
      minnum = args[inicio];
    }
  }
  console.log(`El  menor numero es: ${minnum}`);
}
minimo(arreglo4);

// ejercicio 13

function juego() {
    let jugador1 = prompt(" Jugador 1 ingresa tu nombre");
    let jugador2 = prompt(" Jugador 2 ingrese tu nombre");
    console.log(`inicia el juego j1vsj2 ${jugador1} y ${jugador2}!\n`);
    while (true) {
      let jugada1 = prompt(`${jugador1}, elige Piedra, Papel o Tijeras:`);
      let jugada2 = prompt(`${jugador2}, elige Piedra, Papel o Tijeras:`);
  
      if (jugada1 === jugada2) {
        console.log("Empate");
        continue;
      } else if (
        (jugada1 === "Piedra" && jugada2 === "Tijeras") ||
        (jugada1 === "Papel" && jugada2 === "Piedra") ||
        (jugada1 === "Tijeras" && jugada2 === "Papel")
      ) {
        console.log(`¡${jugador1} es el ganador del juego`);
        break;
      } else {
        console.log(`¡${jugador2} es el ganador del juego`);
        break;
      }
    }
  }
  juego();

// ejercicio 14

let lado = 5;

for (let inicio = 1; inicio <= lado; inicio++) {
  let linea = "";

  for (let j1 = 1; j1 <= lado - inicio; j1++) {
    linea += " ";
  }
  for (let j2 = 1; j2 <= inicio * 2 - 1; j2++) {
    linea += "*";
  }
  console.log(linea);
}

// ejercicio 15

let lado1 = 5;

for (let inicio = ladoOne; inicio >= 1; inicio--) {
  let lineaOne = "";

  for (let j1 = 1; j1 <= ladoOne - inicio; j1++) {
    lineaOne += " ";
  }
  for (let j2 = 1; j2 <= inicio * 2 - 1; j2++) {
    lineaOne += "*";
  }
  console.log(lineaOne);
}