Function expression adalah salah satu cara untuk mendefinisikan fungsi dalam JavaScript. Tidak seperti function declaration, fungsi yang didefinisikan menggunakan function expression tidak memiliki nama (anonymous) atau bisa juga diberi nama. Fungsi ini biasanya disimpan dalam sebuah variabel, sehingga variabel tersebut dapat digunakan untuk memanggil fungsi.

Contoh Function Expression:

```javascript
// Function expression (anonymous function)
const greet = function() {
    console.log("Hello, world!");
};

// Memanggil fungsi
greet(); // Output: Hello, world!

// Function expression dengan nama (named function expression)
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120
```

Perbedaan dengan Function Declaration
Hoisting:
Function declaration di-hoist, sehingga dapat dipanggil sebelum didefinisikan.
Function expression tidak di-hoist, sehingga hanya bisa dipanggil setelah didefinisikan.
Contoh:

```javascript
// Function declaration
sayHello(); // Output: Hello!
function sayHello() {
    console.log("Hello!");
}

// Function expression
// greet(); // Error: Cannot access 'greet' before initialization
const greet = function() {
    console.log("Hi!");
};
```

Penggunaan:
Function expression sering digunakan dalam situasi di mana fungsi perlu didefinisikan secara dinamis, seperti dalam callback atau IIFE (Immediately Invoked Function Expression).

Contoh penggunaan dalam callback:

```javascript
setTimeout(function() {
    console.log("This is a callback function!");
}, 1000);
```

Kapan Menggunakan Function Expression?
Ketika Anda membutuhkan fungsi tanpa nama (anonymous).
Saat mendefinisikan fungsi secara dinamis.
Untuk membuat fungsi yang hanya digunakan dalam lingkup tertentu (scope terbatas).
Function expression memberikan fleksibilitas lebih dibandingkan function declaration, terutama dalam konteks pemrograman fungsional atau saat bekerja dengan callback.