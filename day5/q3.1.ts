let guestss: string[] = ["ahmed", "saad", "minhaj"];

guestss.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


// Q15 Answer:
let unableToAttendd = "saad";
console.log(`${unableToAttendd} can't make it to dinner.`);

// Replace the guest
let newGuests = "amjad";
guestss[guestss.indexOf(unableToAttendd)] = newGuests;

// New invitations
guestss.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});