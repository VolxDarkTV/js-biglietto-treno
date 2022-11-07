// Calcolo Prezzo Biglietti Treno

// ask Km
let howLong = parseInt(prompt("Mi dica quanti Km desidera percorrere: "));
// ask Age
let howOldAreYou = parseInt(prompt("Adesso, Gentilmente mi dica anche la sua eta:"));
// calc total price
    // price for Km = 0.21€
    const priceForKm = 0.21
    let moltiplication = howLong * priceForKm;
    // IF minorenni => -20%
    if(howOldAreYou < 18){
        moltiplication = (howLong * priceForKm)*0.80;
        // arrotondare per 2 DECIMALI
        moltiplication = moltiplication.toFixed(2);
    }else if(howOldAreYou > 65){// ELSE IF over 65 => -40%
        moltiplication = (howLong * priceForKm)*0.60;
        moltiplication = moltiplication.toFixed(2);
    }else{// ELSE full price
        howLong * priceForKm;
    } 
    

// Final Price


    
// DEBUG
console.log(howLong, howOldAreYou, priceForKm, moltiplication)
// arrotondare per 2 DECIMALI
// var rounded = Math.round((moltiplication + Number.EPSILON) * 100) / 100;
// console.log(rounded);