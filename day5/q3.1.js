var guestss = ["ahmed", "saad", "minhaj"];
guestss.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Q15 Answer:
var unableToAttendd = "saad";
console.log("".concat(unableToAttendd, " can't make it to dinner."));
// Replace the guest
var newGuests = "amjad";
guestss[guestss.indexOf(unableToAttendd)] = newGuests;
// New invitations
guestss.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
