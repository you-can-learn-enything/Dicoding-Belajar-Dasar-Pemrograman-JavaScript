const objek1 = {
    nama: "Budi",
    umur: 25,
    pekerjaan: "Programmer"
};
const objek2 = {
    alamat: "Jakarta",
    hobi: "Membaca"
};

// Menggunakan spread operator untuk menyalin objek
// const salinObjek = { ...objek1 };
console.log(objek1);

// Menggunakan spread operator untuk menggabungkan objek
const gabunganObjek = { ...objek1, ...objek2 };
console.log(gabunganObjek);