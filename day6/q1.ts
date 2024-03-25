var guests = ["hamza", "arsaln", "minhaj"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("huzaifa");
guests.splice(guests.length / 2, 0, "minhaj");
guests.push("huzaifa");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});