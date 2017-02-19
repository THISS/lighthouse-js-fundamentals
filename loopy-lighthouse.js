// // count from 100 to 200
// for(var i = 100; i < 201; i++) {
//   if (i % 3 === 0 && i % 4 === 0) {
//     console.log("LoopyLighthouse");
//   }else if (i % 3 === 0) {
//     console.log("Loopy");
//   }else if (i % 4 === 0) {
//     console.log("Lighthouse");
//   }else {
//     console.log(i);
//   }
// }

var loopyLighthouse = function(range, multiples, words) {
  // count between our range array numbers
  for(var i = range[0]; i < range[1]+1; i++) {
    // test against both multiples
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log("LoopyLighthouse");
    }else if (i % 3 === 0) {
      console.log("Loopy");
    }else if (i % 4 === 0) {
      console.log("Lighthouse");
    }else {
      console.log(i);
    }
  }
}
// Added the multiples in the arguments to be called
loopyLighthouse([1,50], [2,5]);
