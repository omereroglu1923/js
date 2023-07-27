function findPrime(...numbers) {
  console.log("Asal sayılar, sadece iki pozitif tam sayı böleni olan, kendisine ve 1 sayısına kalansız bölünebilen, 1'den büyük sayma sayılarıdır. En küçük asal sayı 2'dir.")
  console.log("###############################################")
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 2){//en küçük asalı bulmak için
      console.log(numbers[i]+ " Sayısı 1'den Büyük olmalıdır.")
    }else{
      let say = 0
      for(let x = 2; x < numbers[i]; x++){
        if(numbers[i] % x == 0){
          //girilen sayıya kadar herhangi bir sayıya kalansız bölünüyorsa say değişkenini bir artır.
          say++
        }
      }
      if(say > 1){//say>1 ise girilen sayı bir sayıya kalansız bölünmüştür.
        console.log(numbers[i]+ " Sayısı Asal Değildir.")
      }else{
        console.log(numbers[i]+ " Sayısı ASALDIR.")
      }  
    }
  }
}

findPrime(2,21,8,53,77,1,0,88,-25)