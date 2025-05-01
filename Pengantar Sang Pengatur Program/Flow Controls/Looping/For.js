// for (variabel awal; test kondisi; increment) {
//     // do something
//   }

for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
  }


//   For In
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

// For Of
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}