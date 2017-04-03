// var fruits = ["apple", "banana", "cherry"];
// function outputFruitOld (array) {
//   for (i = 0; i < array.length; i++){		//more performance than .forEach
//   	console.log(array[i]);
//   }
// }

// outputFruitOld(fruits);

// function outputFruit (element, index) {
// 	console.log(element);		//callback method
// 	console.log("array[" + index + "] " + element);
// }
// fruits.forEach(outputFruits);

// fruits.forEach(function(element){
// 	console.log(element);               .forEach does everything a for loop does, but has less of a performance rate
// })

// function backwardFruitsOld(array){
// 	var backwardFruit = [];
// 	for (i = 0; i < array.length; i++){
// 		backwardFruit.push(array[i].split("").reverse().join(""));	//array method chaining example
// 	}
// 	console.log(backwardFruit);
// }

// backwardFruitsOld(fruits);

// // // ***MAP ARRAY METHOD***

// var backwardFruit = fruits.map(function(fruit){
// 	return fruits.split("").reverse().join("");
// });
// console.log(backwardFruit);

// function fiveLettersOnlyOld (array){
// 	var filteredFruits = [];
// 	for (var i = 0; i < array.length; i++){
// 		if(array[i].length === 5){
// 			filteredFruits.push(array[i]);
// 		}
// 	}
// 	console.log(filteredFruits);
// }

// fiveLettersOnlyOld(fruits);

// function filterIt (cat){
// 	if (cat.length === 5){
// 		return cat;
// 	}
// }

// var filteredFruits = fruits.filter(filterIt);
// console.log(filteredFruits);


// var numbers = [0, 1, 2, 3, 4];

// function addzOld(array){
// 	for (var i = 0; i < array.length; i++){
// 		sum = sum + array[i];
// 	}
// 	console.log(sum);
// }
// addzOld(numbers);

// // ******REDUCE ARRAY METHOD******

// var sum = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index){
// 	console.log("current index " + index);
// 	console.log("previousValue ", previousValue);
// 	console.log("currentValue ", currentValue);
// 	return previousValue + currentValue;

// });
// console.log(sum);










