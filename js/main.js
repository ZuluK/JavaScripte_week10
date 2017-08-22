//create an array with 5 different strings.
var arrayOfString = ["Open Minded yes", "Closed minded no", "Breathing? yes","Can you see?", "Hungry? always"];
console.log(arrayOfString.length);
arrayOfString.reverse();
console.log("reversed array:" + arrayOfString);

for(var i = 0;i < arrayOfString.length; i++){
  console.log(arrayOfString[i] + " is " + arrayOfString[i].length + " characters")
};

var arrayOfNumbers = [10,100,93,53,2];
arrayOfNumbers.sort(function(a,b) {
  return a- b;
});
console.log("numbers sorted in ascending order  " + arrayOfNumbers);

//sorts the numbers in descending order
arrayOfNumbers.sort(function(a,b){

  return b-a;
});
console.log("numbers sorted in descending order " + arrayOfNumbers);



var arrayOfMoreStrings = ['Black Panther', 'Iron Man', 'Spider Man'];
arrayOfMoreStrings.push('Vision', 'Hawkeye');
console.log(arrayOfMoreStrings);
arrayOfMoreStrings.shift("Black Panther");
console.log(arrayOfMoreStrings);
