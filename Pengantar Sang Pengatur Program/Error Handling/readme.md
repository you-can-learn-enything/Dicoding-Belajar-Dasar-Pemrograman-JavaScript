# Throwing Error
aat terjadi error, sinyal yang disebut dengan exception akan bangkit. Cara lain untuk membuat exception adalah menggunakan keyword throw untuk generate sebuah error. Sintaks dasarnya adalah seperti berikut.

throw <objek error>

# Catching Error
```
try {
 
  // code...
 
} catch (err) {
 
  // error handling
 
}
```

# Finally
Finally adalah blok kode yang berada di akhir try-catch. Bilamana catch dieksekusi hanya ketika ada error di dalam blok try, blok yang ada di finally akan selalu dieksekusi. Simak contoh di bawah ini.

Dengan menggunakan finally, ia tidak peduli apakah blok try memiliki error atau tidak. 