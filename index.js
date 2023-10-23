//RESUELVE LOS EJERCICIOS AQUI

//?### Map ###


//! [ ] 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que devuelva un array con el cuadrado de cada uno de los elementos.


// const elevado = [4, 5, 6, 7, 8, 9, 10];

// function elev() {
//     for (let i = 0; i < elevado.length; i++) {
//         elevado[i] *= elevado[i];
//     }
// }

// elev();
// console.log(elevado);

const numeros = [4, 5, 6, 7, 8, 9, 10];
const elevados = numeros.map(numero => numero * numero)
console.log(elevados);

   
//!- [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const lugares = ['Italia', 'Japón', 'Valencia', 'no como carne'];

const segundoArray = foodList.map((food, index) => {
    if (index < lugares.length) {
        return `Como soy de ${lugares[index]}, amo comer ${food}`;
    } else {
        return `Aunque no como carne, el ${food} es sabroso`;
    }
});

console.log(segundoArray);


//!3.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
];

const secondArray = staff.map(person => {
    return `${person.name} es ${person.role} y le gusta ${person.hobbies.join(' y ')}`;
});

console.log(secondArray);


//?### Filter ###

//!- [ ] 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = numbers2.filter(numero => {
    return numero % 2 !== 0; 
});

console.log(impares);


//!- [ ] 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];

const result5 = foodList2.filter(comida => comida.isVeggie).map(comida => `Que rico ${comida.name} me voy a comer!`);
console.log(result5);

//!- [ ] 6.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

  const caros = inventory.filter(item => item.price > 300) 
console.log(caros);


//?### Reduce ###

//!- [ ] 6.- Dado el siguiente array **numeros** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array

const numeroS = [39, 2, 4, 25, 62];
const multiplicacion = numeroS.reduce((acumulador, numero) => acumulador * numero, 1);

console.log(multiplicacion);


//!- [ ] 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  'Alejandro',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const concatenarEle = sentenceElements.reduce((acumulador, palabra) => `${acumulador} ${palabra}`);

console.log(concatenarEle);