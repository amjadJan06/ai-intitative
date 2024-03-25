var guests = ["danish", "muhmmad ali", "mohsin"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Q15 Answer:
var unableToAttend = "mohsin";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "muhammad ali";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
