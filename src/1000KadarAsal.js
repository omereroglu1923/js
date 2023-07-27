
for (let index = 2; index <= 1000; index++) {
    let say = 0;
    for(let x = 2; x < index; x++){
        if(index % x == 0){
            say++ 
        }
    }
    if(say == 0){
        console.log(index+ " ASALDIR.")
    }
}
