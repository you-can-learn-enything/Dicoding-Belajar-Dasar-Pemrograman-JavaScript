function myFunc(...name) {
    console.log('name:', name);
    console.log('length:', name.length);
  }
  
  myFunc('Rafy', 'Fikri', 'Dimas');


  const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

  const [first, second, ...rest] = favorites;
  
  console.log(first);
  console.log(second);
  console.log(rest);
  