var vipguests = ["hamza", "arsaln", "minhaj"];
console.log("great! i have invited more people to join");
// Adding more guests
vipguests.unshift("saad");
vipguests.splice(vipguests.length / 2, 0, "ayan");
vipguests.push("hassan");
vipguests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
