Function expression adalah salah satu cara untuk mendefinisikan fungsi dalam JavaScript. Tidak seperti function declaration, fungsi yang didefinisikan menggunakan function expression tidak memiliki nama (anonymous) atau bisa juga diberi nama. Fungsi ini biasanya disimpan dalam sebuah variabel, sehingga variabel tersebut dapat digunakan untuk memanggil fungsi.

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


#  Arrow Function
Function expression benar-benar bisa mengubah cara kita membuat function. Namun, ada alternatif sintaksis lain dalam JavaScript yang bisa lebih mengubah cara kita membuat function. Sintaksis tersebut bernama arrow function. Yap, ini cara baru yang bisa kita manfaatkan dalam membuat function.