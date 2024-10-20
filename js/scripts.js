function toUpper(word) {
  if (word.length > 5) {
    return word.toUpperCase();
  }
  return word.toLowerCase();
}

const js1 = toUpper("Diego");
console.log(js1);

function randomLetter(word) {
  const num = Math.floor(Math.random() * word.length);
  return word.charAt(num);
}

const js2 = randomLetter("Diego");
console.log(js2);

function longestWord(word1, word2) {
  if (word1.length > word2.length) {
    return word1;
  } else if (word2.length > word1.length) {
    return word2;
  }
  return "Las dos palabras tiene el mismo largo";
}

const js3 = longestWord("Holaa", "Adios");
console.log(js3);

function generateWord(word1, word2, word3) {
  const letter1 = word1.charAt(Math.floor(Math.random() * word1.length));
  const letter2 = word1.charAt(Math.floor(Math.random() * word1.length));
  const letter3 = word2.charAt(Math.floor(Math.random() * word2.length));
  const letter4 = word2.charAt(Math.floor(Math.random() * word2.length));
  const letter5 = word3.charAt(Math.floor(Math.random() * word3.length));
  const letter6 = word3.charAt(Math.floor(Math.random() * word3.length));

  return letter1 + letter2 + letter3 + letter4 + letter5 + letter6;
}

const js4 = generateWord("hola", "adios", "mano");
console.log(js4);

function nameAndDomain(email) {
  const index = email.indexOf("@");

  const name = email.substring(0, index);
  const mail = email.substring(index + 1);

  return `El usuario es ${name} y el dominio es ${mail}`;
}

const js5 = nameAndDomain("diego@gmail.com");
console.log(js5);

function interleaved(word) {
  interWord =
    word.charAt(0).toLowerCase() +
    word.charAt(1).toUpperCase() +
    word.charAt(2).toLowerCase() +
    word.charAt(3).toUpperCase() +
    word.charAt(4).toLowerCase();

  return interWord;
}

const js6 = interleaved("Diego");
console.log(js6);

function createNick(name, lastName) {
  const firstLetter = name.charAt(0);
  const num = Math.floor(Math.random() * 101);
  return `${firstLetter}${lastName}${num}`;
}

const js7 = createNick("Diego", "Martinez");
console.log(js7);

function verbs(word1, word2) {
  function configuration(verb) {
    if (verb.endsWith("ar")) {
      return "primera conjugación";
    } else if (verb.endsWith("er")) {
      return "segunda conjugación";
    } else if (verb.endsWith("ir")) {
      return "tercera conjugación";
    } else {
      return "desconocida";
    }
  }
  const wordVerb1 = configuration(word1);
  const wordVerb2 = configuration(word2);

  return `El verbo ${word1} es de la ${wordVerb1} y el verbo ${word2} de la ${wordVerb2}.`;
}

const js8 = verbs("andar", "correr");
console.log(js8);

function wordInverse(word) {
  const letter1 = word.charAt(3);
  const letter2 = word.charAt(2);
  const letter3 = word.charAt(1);
  const letter4 = word.charAt(0);

  return letter1 + letter2 + letter3 + letter4;
}

const js9 = wordInverse("dado");
console.log(js9);

function countLetters(word1, word2, word3) {
  const count1 = word1.length;
  const count2 = word2.length;
  const count3 = word3.length;
  return count1 + count2 + count3;
}

const js10 = countLetters("hola", "mundo", "javascript");
console.log(js10);

function upperPhrase(phrase) {
  const secondWord = phrase.indexOf(" ");
  const firstCapital = phrase.charAt(0).toUpperCase();
  const secondCapital = phrase.charAt(secondWord + 1).toUpperCase();
  return `${firstCapital}${phrase.substring(
    1,
    secondWord
  )} ${secondCapital}${phrase.substring(secondWord + 2)}`;
}

const js11 = upperPhrase("somos programadores");
console.log(js11);

function nameInitials(name, lastName) {
  const firstLetter = name.charAt(0).toUpperCase();
  const secondLetter = lastName.charAt(0).toUpperCase();

  return `${firstLetter}.${secondLetter}.`;
}

const js12 = nameInitials("diego", "martinez");
console.log(js12);

function averageWords(word1, word2, word3) {
  const numWord1 = word1.length;
  const numWord2 = word2.length;
  const numWord3 = word3.length;

  const average = (numWord1 + numWord2 + numWord3) / 3;

  return average;
}

const js13 = averageWords("Hola", "adios", "mundo");
console.log(js13);

function formatNumber(num) {
  const numText = num.toString();
  return `(${numText.substring(0, 3)}) ${numText.substring(
    3,
    6
  )}-${numText.substring(6)}`;
}

const js14 = formatNumber(1234567890);
console.log(js14);

function wordInverseDouble(word) {
  const letter1 = word.charAt(3);
  const letter2 = word.charAt(2);
  const letter3 = word.charAt(1);
  const letter4 = word.charAt(0);

  return (
    letter1 +
    letter1 +
    letter2 +
    letter2 +
    letter3 +
    letter3 +
    letter4 +
    letter4
  );
}

const js15 = wordInverseDouble("hola");
console.log(js15);

function isOddTrue(num) {
  const num1 = Math.floor(num / 10);
  const num2 = num % 10;

  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return true;
  }

  return false;
}

const js16 = isOddTrue(46);
console.log(js16);

function verifyLetters(word1, word2) {
  const letter1 = word1.charAt(0);
  const letter2 = word1.charAt(1);
  const letter3 = word1.charAt(2);
  const letter4 = word1.charAt(3);

  if (
    word2.includes(letter1) &&
    word2.includes(letter2) &&
    word2.includes(letter3) &&
    word2.includes(letter4)
  ) {
    return true;
  }

  return false;
}

const js17 = verifyLetters("amor", "mora");
console.log(js17);

function nCaracteres(text, num) {
  return text.slice(0, num);
}

const js18 = nCaracteres("Hola soy Diego", 11);
console.log(js18);

function isOnPhrase(phrase, word) {
  return phrase.includes(word);
}

const js19 = isOnPhrase("Hola soy Diego", "Diego");
console.log(js19);
