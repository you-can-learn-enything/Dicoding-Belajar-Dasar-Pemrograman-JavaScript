const set = new Set();
console.log(set); // Output: Set(0) {}

const set2 = new Set([1, 2, 3, 4, 5]);
console.log(set2); // Output: Set(5) { 1, 2, 3, 4, 5 }

set2.add(6);
set2.add('Apple');
set2.add('Banana');
console.log(set2); // Output: Set(6) { 1, 2, 3, 4, 5, 6


// Mengakses Nilai di Set

set.add(1);
set.add(2);
for (const value of set2) {
    console.log(value); // Output: 1 2
}


// Menghapus Nilai di Set
// set tidak memiliki urutan atau index, jadi argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
set.delete(2);
console.log(set); // Output: Set(1) { 2 }