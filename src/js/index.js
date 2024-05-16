// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.
const fiveNumsArray = array => {
  const numRandom = Math.floor(Math.random() * array.length);
  console.log(array[numRandom]);
};
const arrayFiveNums = [2, 6, 1, 9, 7];
fiveNumsArray(arrayFiveNums);
console.log('');

// Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.
const threeNumsArray = array => {
  const addition = array[0] + array[1] + array[2];
  console.log(`La suma de todos los números es: ${addition}.`);

  const average = addition / array.length;
  console.log(`La media de todos los números es: ${average}`);

  let message1 = '';
  let message2 = '';
  if (array[0] > array[1] && array[0] > array[2]) {
    message1 = `El mayor es ${array[0]}`;
  } else if (array[1] > array[0] && array[1] > array[2]) {
    message1 = `El mayor es ${array[1]}`;
  } else {
    message1 = `El mayor es ${array[2]}`;
  }

  if (array[0] < array[1] && array[0] < array[2]) {
    message2 = ` y el menor es ${array[0]}`;
  } else if (array[1] < array[0] && array[1] < array[2]) {
    message2 = ` y el menor es ${array[1]}`;
  } else {
    message2 = ` y el menor es ${array[2]}`;
  }
  console.log(message1 + message2);
};
const arrayThreeNums = [2, 4, 6];
threeNumsArray(arrayThreeNums);
console.log('');

// Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.
const zeroToTenArray = array => {
  const numRandom = Math.floor(Math.random() * 10);

  if (array.includes(numRandom)) {
    console.log(
      `El array contiene el valor ${numRandom} en la posición ${array.indexOf(
        numRandom
      )}`
    );
  } else {
    console.log(`El array no contiene el valor ${numRandom}`);
  }
};
const arrayZeroToTen = [6, 3, 7, 10, 1];
zeroToTenArray(arrayZeroToTen);
console.log('');

// Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.
const emptyArray = array => {
  array.push(Math.floor(Math.random() * 101));
  array.push(Math.floor(Math.random() * 101));
  array.push(Math.floor(Math.random() * 101));

  console.log(array);
};
const arrayEmpty = [];
emptyArray(arrayEmpty);
console.log('');

// Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.
const evenOddArray = array => {
  const evenArray = [];
  const oddArray = [];

  const numRandom = Math.floor(Math.random() * 10 + 1);
  console.log(numRandom);
  if ((array[0] * numRandom) % 2 == 0) {
    evenArray.push(array[0]);
  }
  if ((array[1] * numRandom) % 2 == 0) {
    evenArray.push(array[1]);
  }
  if ((array[2] * numRandom) % 2 == 0) {
    evenArray.push(array[2]);
  }
  if ((array[3] * numRandom) % 2 == 0) {
    evenArray.push(array[3]);
  }
  if ((array[4] * numRandom) % 2 == 0) {
    evenArray.push(array[4]);
  }

  if ((array[0] * numRandom) % 2 != 0) {
    oddArray.push(array[0]);
  }
  if ((array[1] * numRandom) % 2 != 0) {
    oddArray.push(array[1]);
  }
  if ((array[2] * numRandom) % 2 != 0) {
    oddArray.push(array[2]);
  }
  if ((array[3] * numRandom) % 2 != 0) {
    oddArray.push(array[3]);
  }
  if ((array[4] * numRandom) % 2 != 0) {
    oddArray.push(array[4]);
  }

  console.log(`Array normal: ${array}`);
  console.log(`Array even: ${evenArray}`);
  console.log(`Array odd: ${oddArray}`);
};
const arrayEvenOdd = [4, 2, 7, 5, 9];
evenOddArray(arrayEvenOdd);
console.log('');

// Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.
const dniLetter = dni => {
  const arrayLetters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];
  const letterPosition = dni % 23;
  console.log(`${dni}${arrayLetters[letterPosition]}`);
};
const dniNoLetter = 52052684;
dniLetter(dniNoLetter);
console.log('');

// Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']
const lettersArray = array => {
  const arrayLetters = [];

  const letter1Word1 = array[0].charAt(0).toUpperCase();
  const letter2Word1 = array[0].charAt(array[0].length - 1).toUpperCase();
  arrayLetters.push(letter1Word1, letter2Word1);

  const letter1Word2 = array[1].charAt(0).toUpperCase();
  const letter2Word2 = array[1].charAt(array[1].length - 1).toUpperCase();
  arrayLetters.push(letter1Word2, letter2Word2);

  const letter1Word3 = array[2].charAt(0).toUpperCase();
  const letter2Word3 = array[2].charAt(array[2].length - 1).toUpperCase();
  arrayLetters.push(letter1Word3, letter2Word3);

  console.log(arrayLetters);
};
const arrayWords = ['paco', 'merluza', 'limon'];
lettersArray(arrayWords);
