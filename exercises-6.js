// 1. Melakukan Looping Menggunakan While.
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

function tampilkanKelipatan(counter, penambahan, kelipatan) {
  var result = counter;

  while(counter <= 100) {
    result += penambahan;

    if(result % kelipatan === 0) {
      console.log('('+ result +')' + ' - ' + kelipatan +' kelipatan ' + kelipatan);
    } else {
      console.log('('+ result +')' + ' - ' + 'bukan');
    }

    counter += penambahan;
  }
}

// 3a. tiga kelipatan tiga dengan pertambahan counter sebesar 2
tampilkanKelipatan(1, 2, 3);

// 3b. enam kelipatan enam dengan pertambahan counter sebesar 5
tampilkanKelipatan(1, 5, 6);

// 3c. sepuluh kelipatan sepuluh dengan pertambahan counter sebesar 9
tampilkanKelipatan(1, 9, 10);
