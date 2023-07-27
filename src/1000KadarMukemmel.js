for (let index = 1; index < 1000; index++) {

  let Toplam = 0; 

  for(let x = 1; x < index; x++){
    if(index % x == 0){
      Toplam += x;
    }
  }

  if(Toplam == index){
    console.log(Toplam+ " Mükemmel Sayıdır.");
  }
}

