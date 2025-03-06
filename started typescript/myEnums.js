//ENUMS
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["Fourth"] = "fourth";
    SeatChoice[SeatChoice["Window"] = 1] = "Window";
    SeatChoice[SeatChoice["Aisle"] = 2] = "Aisle";
    SeatChoice[SeatChoice["Middle"] = 3] = "Middle";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.Fourth;
console.log(hcSeat);
