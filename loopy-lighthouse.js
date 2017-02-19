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
    if (i % 3 === 0 && i % 4 === 0) {
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

loopyLighthouse([1,50]);
