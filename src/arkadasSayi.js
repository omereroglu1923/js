function arkadasSayiBul(sayiBir,sayiIki){

    let toplamSayiBir = 0;
    let toplamSayiIki = 0;

    for(let x = 0; x < sayiBir; x++){
        if(sayiBir % x == 0){
            toplamSayiBir += x
        }
    }

    for(let i = 0; i < sayiIki; i++){
        if(sayiIki % i == 0){
            toplamSayiIki += i
        }
    }

    if(sayiBir == toplamSayiIki && sayiIki == toplamSayiBir){
        console.log(sayiBir+ " ve " +sayiIki+ " Arkadaş Sayıdır.")
    }else{
        console.log(sayiBir +", "+sayiIki+" Sayıları Arkadaş Sayı Değildir.")
    }
}
arkadasSayiBul(59,62)
arkadasSayiBul(220,284)
arkadasSayiBul(1184,1210)
arkadasSayiBul(17296,18416)