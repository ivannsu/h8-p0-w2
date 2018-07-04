// 1. Melakukan Looping Menggunakan While
var x = 2;

console.log('LOOPING PERTAMA');
while(x <= 20) {
  console.log(x + ' - I love Coding');
  x = x + 2;
}

var y = 20;

console.log('LOOPING KEDUA');
while(y >= 2) {
  console.log(y + ' - I will become FullStack Developer');
  y = y - 2;
}

// 2. Melakukan Looping Menggunakan For
var i;

console.log('LOOPING PERTAMA');
for(i = 1; i <= 20; i++) {
  console.log(i + ' - I love Coding');
}

console.log('LOOPING KEDUA');
for(i = 20; i >= 1; i--) {
  console.log(i + ' - I will become FullStack Developer');
}

// 3. Angka Ganjil dan Genap
var a = 1;

while(a <= 100) {
  if((a % 2) !== 0) {
    console.log('('+ a +')' + ' - GANJIL');
    a++;
  } else {
    console.log('('+ a +')' + ' - GENAP');
    a++;
  }
}

// 3a. tiga kelipatan tiga dengan pertambahan counter sebesar 2
var counter = 1;
var result = 1;

while(counter <= 100) {
  result += 2; // Penambahan sebesar 2

  if(result % 3 === 0) {
    console.log('('+ result +')' + ' - ' + '3 kelipatan 3');
  } else {
    console.log('('+ result +')' + ' - ' + 'bukan');
  }

  counter += 2;
}

// 3b. enam kelipatan enam dengan pertambahan counter sebesar 5
var counter2 = 1;
var result2 = 1;

while(counter2 <= 100) {
  result2 += 5; // Penambahan sebesar 5

  if(result2 % 6 === 0) {
    console.log('('+ result2 +')' + ' - ' + '6 kelipatan 6');
  } else {
    console.log('('+ result2 +')' + ' - ' + 'bukan');
  }

  counter2 += 5;
}

// 3c. sepuluh kelipatan sepuluh dengan pertambahan counter sebesar 9
var counter3 = 1;
var result3 = 1;

while(counter3 <= 100) {
  result3 += 9; // Penambahan sebesar 5

  if(result3 % 10 === 0) {
    console.log('('+ result3 +')' + ' - ' + '10 kelipatan 10');
  } else {
    console.log('('+ result3 +')' + ' - ' + 'bukan');
  }

  counter3 += 9;
}
