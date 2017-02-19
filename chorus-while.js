var chorus = "Let's dance!";
var repeat = 0;
while (repeat < 10) {
  // To prevent repetitiveness let's change the key
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}

console.log("Until the sun comes up!");