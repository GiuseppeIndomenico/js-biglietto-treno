


const priceForKm = (0.21)

var passengerYears;
passengerYears = prompt("inserisci la tua età qui")

var passengerKm
passengerKm = prompt("inserisci i Km da Effettuare")

var totalPrice = (passengerKm * priceForKm)

console.log(passengerYears)

console.log(passengerKm)

console.log(totalPrice)


if (passengerYears < 18) {

    totalPrice = (totalPrice - (totalPrice * 0.20))

} else if (passengerYears >= 65) {

    totalPrice =  (totalPrice - (totalPrice * 0.40))

}



document.getElementById("ticket").innerHTML =



    `
    <h1 class= "m-5">
    Gentile Cliente!
    
    </h1>
   <h2 class= "m-5">  Il prezzo del suo biglietto è: ${totalPrice.toFixed(2) } &euro; buona giornata!
    </h2>
    
    `







