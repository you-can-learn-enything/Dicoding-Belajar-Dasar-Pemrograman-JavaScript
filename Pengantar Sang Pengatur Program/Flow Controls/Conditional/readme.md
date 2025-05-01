
# If Statement
Adakalanya kita membuat program yang hanya dijalankan ketika suatu kondisi terpenuhi. Untuk melakukan hal itu, kita bisa menggunakan if statement. If statement merupakan fundamental statement yang memungkinkan JavaScript untuk membuat keputusan apakah mengeksekusi program atau tidak. Bentuk umumnya adalah seperti berikut ini.

```
if (expression)
   statement
```
If statement akan mengeksekusi blok jika kondisi terpenuhi (true). Jika kondisi belum terpenuhi (false), kode tidak akan dieksekusi

# Switch statement
Switch statement adalah control flow statement yang mengevaluasi expression terhadap beberapa kasus. Switch dapat menggantikan beberapa pengecekan kondisi yang dilakukan oleh if. Selain itu, menggunakan switch membuat kode menjadi lebih readable dan ringkas. 
```switch (expression) {
    statement
}
```

contoh nya
```
const fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
}

```