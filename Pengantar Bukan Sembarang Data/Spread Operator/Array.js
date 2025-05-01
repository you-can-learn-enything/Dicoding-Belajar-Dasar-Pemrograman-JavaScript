const array = ['apple', 'banana', 'cherry'];
const array2 = ['orange', 'grape', 'kiwi'];
const array3 = ['mango', 'pear', 'peach',1,];

const newArray = [...array, ...array2, ...array3]; // Menggabungkan array
console.log(newArray); // Output: ['apple', 'banana', 'cherry', 'orange', 'grape', 'kiwi', 'mango', 'pear', 'peach']