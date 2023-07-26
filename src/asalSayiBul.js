//asal sayı bulan algoritma
const findPrime = function (...numbers) {
    let isPrime = true;
    numbers.map((number) => {
      if (number !== 0 && number !== 1) {
        for (let i = 2; i < number; i++) {
          if (number % i === 0) {
            isPrime = false;
          }
        }
        if (isPrime) {
          console.log(`${number} asaldır.`);
        }
        isPrime = true;
      }
    });
  };
  
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 21];
  
  findPrime(...numbers);
  
  console.log(
    "---------------------------------------------------------------------------------"
  );