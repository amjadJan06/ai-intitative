let place: string[] = ["zimbabwae", "bangkok", "america", "kazakistan", "shah faisal"];

console.log("Original order:", place);

console.log("Alphabetical order:", [...place].sort());

console.log("Original order:", place);

console.log("Reverse alphabetical order:", [...place].sort().reverse());

console.log("Original order:", place);

place.reverse();
console.log("Reversed order:", place);

place.reverse();
console.log("Original order:", place);

place.sort();
console.log("Alphabetical order:", place);

place.reverse();
console.log("Reverse alphabetical order:", place);