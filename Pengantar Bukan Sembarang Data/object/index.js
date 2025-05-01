// object literal
const products = { name: 'Sepatu', price: 230000 };

console.log(products.name, products.price);


// Mengakses menggunakan square bracket

const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
  };
  
  console.log(user['last name']); // Output: Indonesia


//   Mengakses menggunakan object destructuring
const users = {
    'name': 'Dicoding',
  'lastName': 'Indonesia',
  age: 9
}
const { name, lastName, isMale = false } = users;
console.log(name, lastName); // Output: Dicoding Indonesia
console.log(isMale); // Output: Dicoding Indonesia


const userss = {
        id: 24,
        email: 'aras@dicoding.com',
        name: 'Arsy',
        nickname: 'Aras',
        username: 'aras123',
        password: 'secret',
    }

const { id, email } = userss;

console.log(id, email);

// Mengubah Nilai di Properti Object
const account = {
    balance: 1000,
    deb: 10,
}


account.balance = 2000;
// delete
delete account.deb;
delete account['balance'];
console.log(account.balance, account.deb); // Output: 2000