// const map = new Map();

// console.log(map); // Output: Map(0) {}
// Map adalah struktur data yang menyimpan pasangan key-value
// Mirip dengan objek, tetapi key dapat berupa tipe data apa pun
// Map juga memiliki urutan penyimpanan yang terjaga
// Map memiliki metode yang lebih kaya dibandingkan objek
// Map memiliki metode untuk menambahkan, menghapus, dan mencari elemen
// Map juga memiliki metode untuk mengiterasi elemen
// Map memiliki metode untuk mengonversi ke array
// Map memiliki metode untuk mengonversi ke objek
// Map memiliki metode untuk mengonversi ke string
// Map memiliki metode untuk mengonversi ke JSON
// Map memiliki metode untuk mengonversi ke Set
// Map memiliki metode untuk mengonversi ke WeakMap
// Map memiliki metode untuk mengonversi ke WeakSet
// Map memiliki metode untuk mengonversi ke Map
// Map memiliki metode untuk mengonversi ke WeakMap
// Map memiliki metode untuk mengonversi ke WeakSet

// Membuat Map
const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);
console.log(productMap); // Output: Map(2) { 'name' => 'Sepatu', 'price' => 230000 }

// Menyimpan Nilai di Map
// const map = new Map();
// map.set('name', 'Sepatu');
// map.set('price', 230000);
// console.log(map); // Output: Map(2) { 'name' => 'Sepatu', 'price' => 230000 }

// menggunakan nilai number
// const map = new Map();
// map.set(1, 'number one');
// console.log(map); // Map(1) { 1 => 'number one' }


// Mengakses Nilai di Map
const map = new Map();
map.set('name', 'Sepatu');
map.set('price', 230000);
console.log(map.get('name')); // Output: Sepatu
console.log(map.get('price')); // Output: 230000

// Menghapus Nilai di Map
const map2 = new Map();
map2.set('name', 'Sepatu');
map2.set('price', 230000);
map2.delete('name');
console.log(map2); // Output: Map(1) { 'price' => 230000 }
console.log(map2.get('name')); // Output: undefined
console.log(map2.get('price')); // Output: 230000