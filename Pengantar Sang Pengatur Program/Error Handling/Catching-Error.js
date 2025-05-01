// try {
//     console.log('Memulai program');
//     console.log('Mengakhiri program');
//   } catch (err) {
//     console.log('Karena tidak ada error, blok ini akan diabaikan');
//   }

try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  }


  try {
    console.log('Ini try block');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }

  