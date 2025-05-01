const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]


// Menggunakan array literal

const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits); // Output: ["apple", "banana", "cherry"]

// mengakses elemen array
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana


// manipulasi array
fruits.push('orange'); // menambahkan elemen di akhir
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]
fruits.pop(); // menghapus elemen terakhir
console.log(fruits); // Output: ["apple", "banana", "cherry"]
fruits.unshift('kiwi'); // menambahkan elemen di awal
console.log(fruits); // Output: ["kiwi", "apple", "banana", "cherry"]
fruits.shift(); // menghapus elemen pertama
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// mengubah elemen array
fruits[1] = 'grape'; // mengubah elemen kedua
console.log(fruits); // Output: ["apple", "grape", "cherry"]

// menghapus elemen array
fruits.splice(1, 1); // menghapus elemen kedua
console.log(fruits); // Output: ["apple", "cherry"]

// menggabungkan array
const vegetables = ['carrot', 'broccoli'];
const food = fruits.concat(vegetables);
console.log(food); // Output: ["apple", "cherry", "carrot", "broccoli"]

// mencari elemen dalam array
const index = fruits.indexOf('banana'); // mencari indeks elemen
console.log(index); // Output: -1 (tidak ditemukan)
const found = fruits.includes('banana'); // memeriksa apakah elemen ada
console.log(found); // Output: false

// mengurutkan array
const numbers = [5, 2, 8, 1, 4];
numbers.sort(); // mengurutkan secara ascending
console.log(numbers); // Output: [1, 2, 4, 5, 8]

// mengurutkan secara descending
numbers.sort((a, b) => b - a); // mengurutkan secara descending
console.log(numbers); // Output: [8, 5, 4, 2, 1]

// mengurutkan array objek
const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jack', age: 20 },
];
people.sort((a, b) => a.age - b.age); // mengurutkan berdasarkan usia
console.log(people); // Output: [{ name: 'Jack', age: 20 }, { name: 'John', age: 25 }, { name: 'Jane', age: 30 }]

// mencari elemen dalam array objek
const foundPerson = people.find(person => person.name === 'Jane'); // mencari objek dengan nama 'Jane'
console.log(foundPerson); // Output: { name: 'Jane', age: 30 }

// mencari semua elemen dalam array objek
const foundPeople = people.filter(person => person.age > 25); // mencari objek dengan usia lebih dari 25
console.log(foundPeople); // Output: [{ name: 'Jane', age: 30 }]

// menghitung jumlah elemen dalam array
const count = fruits.length; // menghitung jumlah elemen
console.log(count); // Output: 3

// mengubah array menjadi string
const fruitsString = fruits.join(', '); // mengubah array menjadi string
console.log(fruitsString); // Output: "apple, cherry"

// mengubah string menjadi array
const fruitsArray = fruitsString.split(', '); // mengubah string menjadi array
console.log(fruitsArray); // Output: ["apple", "cherry"]

// mengubah array menjadi string dengan pemisah khusus
const fruitsStringWithSeparator = fruits.join(' - '); // mengubah array menjadi string dengan pemisah '-'
console.log(fruitsStringWithSeparator); // Output: "apple - cherry"

// mengubah string menjadi array dengan pemisah khusus
const fruitsArrayWithSeparator = fruitsStringWithSeparator.split(' - '); // mengubah string menjadi array dengan pemisah '-'
console.log(fruitsArrayWithSeparator); // Output: ["apple", "cherry"]

// mengubah array menjadi string dengan pemisah khusus
const fruitsStringWithCustomSeparator = fruits.join(' | '); // mengubah array menjadi string dengan pemisah '|'
console.log(fruitsStringWithCustomSeparator); // Output: "apple | cherry"

// mengubah string menjadi array dengan pemisah khusus
const fruitsArrayWithCustomSeparator = fruitsStringWithCustomSeparator.split(' | '); // mengubah string menjadi array dengan pemisah '|'
console.log(fruitsArrayWithCustomSeparator); // Output: ["apple", "cherry"]

// mengubah array menjadi string dengan pemisah khusus
const fruitsStringWithCustomSeparator2 = fruits.join(' / '); // mengubah array menjadi string dengan pemisah '/'
console.log(fruitsStringWithCustomSeparator2); // Output: "apple / cherry"
