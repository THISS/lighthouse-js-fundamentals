var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var separator = function() {
  console.log("_____________________________________\n");
}
// Write a while loop that prints out the contents of ingredients:
var index = 0;
while(index < ingredients.length) {
  console.log(ingredients[index]);
  index++;
}

separator();

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

separator();

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for ( var i = ingredients.length - 1; i > -1; i--) {
  console.log(ingredients[i]);
}