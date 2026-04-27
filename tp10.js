function ejercicio10(){
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i =0 ; i<36000; i++){
        let dado1 = matchMedia.floor(Math.ramdom() * 6 ) + 1;
         let dado2 = matchMedia.floor(Math.ramdom() * 6 ) + 1;
         let suma = dado1 + dado2
         arr [suma] = arr[suma] + 1
        
    }
    console.log(arr);

    for(let j = 2; j<13; j++){
        console.log("el numero "+ j +"salio: "+ arr[j] + "veces en total." );
    }
}      
