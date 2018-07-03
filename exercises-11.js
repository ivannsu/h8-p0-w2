function balikKata(kata) {
  var result = '';
  var flag = kata.length;

  while(result.length < kata.length) {
    var character = kata[flag - 1];
    result += character;
    flag--;
  }

  return result;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
