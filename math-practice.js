
// let myNumber = -5;
// let output = Math.abs(myNumber);
// console.log(output);

// let orangePrice = 55.65;
// let evenorangePriceUp = Math.ceil(orangePrice);
// console.log(evenorangePriceUp);

// let orangePrice = 55.65;
// let evenorangePriceDown = Math.floor(orangePrice);
// console.log(evenorangePriceDown);

// let orangePrice = 55.65;
// let evenorangePriceUp_Down = Math.round(orangePrice);
// console.log(evenorangePriceUp_Down);

// let orangePrice = 55.45;
// let evenorangePriceUp_Down = Math.round(orangePrice);
// console.log(evenorangePriceUp_Down);

// let ludo = Math.random();
// console.log(ludo);

// let ludo = Math.random();
// console.log(Math.ceil(ludo));

// let ludo = Math.random() * 5;
// console.log(ludo);

// let waterGlass = 7;
// let milkGlass = 9;
// console.log(waterGlass, milkGlass);

// //for exchange

// // let emptyGlass = waterGlass;
// // waterGlass = milkGlass;
// // milkGlass = emptyGlass;
// // console.log(waterGlass, milkGlass);

// //or

// [waterGlass, milkGlass]=[milkGlass, waterGlass]
// console.log(waterGlass, milkGlass);

// let minister = 8946589608;
// let business = 9764225577;
// if(minister > business){
//     console.log('minister is the best');    
// }
// else {
//     console.log('business is the best');
// }

// let minister = 9764225577;
// let business = 8946589608;
// if(minister > business){
//     console.log('minister is the best');    
// }
// else {
//     console.log('business is the best');
// }

// let minister = 9764225577;
// let business = 8946589608;
// let bcs = 6765449876;
// if(minister > business && minister > bcs){
//     console.log('minister is the best');    
// }
// else if (business > minister && business > bcs){
//     console.log('business is the best');
// }
// else  {
//     console.log('bcs is the best');
// }

// let minister = 894658960;
// let business = 976422557;
// let bcs = 6765449876;
// if(minister > business && minister > bcs){
//     console.log('minister is the best');    
// }
// else if (business > minister && business > bcs){
//     console.log('business is the best');
// }
// else  {
//     console.log('bcs is the best');
// }

// let minister = 894658960;
// let business = 976422557;
// let bcs = 6765449876;
// let bigger = Math.max(minister, business, bcs)
// console.log(bigger);

// let minister = 894658960;
// let business = 976422557;
// let bcs = 6765449876;
// let bigger = Math.min(minister, business, bcs)
// console.log(bigger);

// let number = [10, 15, 1, 6, 4, 75, 21, 66, 3];
// let sum = 0;
// for (i = 0; i < number.length; i++){
//     let element = number[i];
//     console.log(element);
// }

// let number = [10, 15, 1, 6, 4, 75, 21, 66, 3];
// let sum = 0;
// for (i = 0; i < number.length; i++){
//     let element = number[i];
//     sum = sum + element;
// }
// console.log(sum);

// let number = [10, 15, 1, 6, 4, 75, 21, 66, 3];
// let number1 = [10, 15, 15, 9, 10, 75, 21, 66, 3];

// function arraySum (numbers){
//     let sum = 0;
// for (i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     sum = sum + element;
// }
// return sum
// }

// let firstArray = arraySum (number);
// let secondArray = arraySum (number1);
// console.log(firstArray);
// console.log(secondArray);

// let number2 = [10, 215, 315, 59, 10, 75, 21, 66, 3];
// let largest = 0;
// for (i = 0; i < number2.length; i++){
//     let element = number2[i]
//     // console.log(element);
//     if (element > largest){
//         largest = element
//     }
// }
// console.log(largest);


// let number2 = [10, 215, 315, 59, 10, 575, 21, 66, 3];
// function findLargest (numbers){
//     let largest = 0;
// for (i = 0; i < number2.length; i++){
//     let element = number2[i]
//     // console.log(element);
//     if (element > largest){
//         largest = element
//     }
// }
// return largest

// }
// let output = findLargest (number2);
// console.log(output);


// 4th = 3rd + 2nd
// 19th = 18th + 17th
// n = (n-1)th + (n-2)th

// let fibo = [0,1];
// for (i = 2; i <= 7; i++){
//     // n = (n-1)th + (n-2)th
//     // i = (n-1)th + (i-2)th
//     fibo[i] = fibo[i-1] + fibo[i-2]
// }
// console.log(fibo);

// let fibo = [0,1];
// for (i = 2; i <= 14; i++){
//     // n = (n-1)th + (n-2)th
//     // i = (n-1)th + (i-2)th
//     fibo[i] = fibo[i-1] + fibo[i-2]
// }
// console.log(fibo);

// function fibonacciSeries (number){
//     let fibo = [0,1];
// for (i = 2; i <= number; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2]
// }
// return fibo

// }
// let fibonacciSeriesValueAndResult = fibonacciSeries(19);
// console.log(fibonacciSeriesValueAndResult);

// function fibonacciSeries (number){
//     if(typeof(number) != 'number'){
//         return 'Please provide valid number'
//     }
//     let fibo = [0,1];
// for (i = 2; i <= number; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2]
// }
// return fibo

// }
// let fibonacciSeriesValueAndResult = fibonacciSeries('19');
// console.log(fibonacciSeriesValueAndResult);

// function fibonacciSeries (number){
//     if(typeof(number) != 'number'){
//         return 'Please provide valid number'
//     }
//     if(number < 2){
//         return 'Valo hoye jaw masud'
//     }
//     let fibo = [0,1];
// for (i = 2; i <= number; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2]
// }
// return fibo

// }
// let fibonacciSeriesValueAndResult = fibonacciSeries(1);
// console.log(fibonacciSeriesValueAndResult);



















