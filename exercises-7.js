// 1. Menyusun Barisan Bintang
for(var i = 0; i < 5; i++) {
  console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
for(var i = 0; i < 5; i++) {

  var asterisks = '';

  for(var j = 0; j < 5; j++) {
    asterisks += '*';
  }

  console.log(asterisks);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var asterisks = '';

for(var i = 0; i < 5; i++) {

  asterisks += '*';

  console.log(asterisks);
}
