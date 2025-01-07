
//no-01
/*for (var number = 0; number <= 100; number++) {
    if (number % 2 !== 0) {
        console.log(number);      
    }
}
*/

//no-02
/*let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
$numbers.sort((a, b) => a - b);
console.log($numbers);
*/


//no-03
/*let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
let sum = $numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
*/



//no-04
/*let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
let uniqueNumber = [];
for (let i = 0; i < $numbers.length; i++) {
    if (!uniqueNumber.includes($numbers[i])) {
        uniqueNumber.push($numbers[i]);
    }
}
console.log(uniqueNumber);
*/

/*
let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
let unidue = [];
$numbers.sort((a, b) => a - b);
unidue.push($numbers[0]);

 for(let i=0;i<$numbers.length-1;i++)
 {
    if($numbers[i]!=$numbers[i+1]) unidue.push($numbers[i+1]);

 }
 console.log(unidue);

 */

 //no-05

 /*let $numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0];
let positiveNumbers = $numbers2.filter(num => num >= 0);
console.log(positiveNumbers);
*/

//no-06

/*let $numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0];
let divisible = $numbers2.filter(num => num % 10 === 0&& num !== 0);
console.log(divisible);
*/

//no-07
/*
function vowels(str) {
    let vowelList = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = str.toLowerCase().split('').filter(char => vowelList.includes(char)).length;
    return vowelCount;
}
console.log(vowels('How are you'));
*/

//no-08

/*let products = [
    {"name": "I Phone 13 Pro", "price": 899, "brand": "iphone", "rating": {"average": "4.2", "user_count": 200}, "discount": "20%"},
    {"name": "I Phone 7", "price": 399, "brand": "iphone", "rating": {"average": "3.9", "user_count": 600}, "discount": "0%"},
    {"name": "I Phone sr", "price": 599, "brand": "iphone", "rating": {"average": "4.24", "user_count": 450}, "discount": "20%"},
    {"name": "I Phone 12", "price": 599, "brand": "iphone", "rating": {"average": "4.3", "user_count": 167}, "discount": "14%"},
    {"name": "Samsung Note 10", "price": 699, "brand": "samsung", "rating": {"average": "3.2", "user_count": 154}, "discount": "0%"},
    {"name": "Samsung Note 11", "price": 799, "brand": "samsung", "rating": {"average": "4.7", "user_count": 312}, "discount": "5%"},
    {"name": "A52s", "price": 499, "brand": "samsung", "rating": {"average": "4.6", "user_count": 180}, "discount": "6%"},
    {"name": "A52s 5G", "price": 599, "brand": "samsung", "rating": {"average": "4.4", "user_count": 61}, "discount": "0%"},
    {"name": "I Phone 14", "price": 800, "brand": "iphone", "rating": {"average": "4.8", "user_count": 20}, "discount": "0%"},
    {"name": "I Phone 14 pro max", "price": 1200, "brand": "iphone", "rating": {"average": "5", "user_count": 1}, "discount": "50%"},
    {"name": "Xiaomi Poco M5", "price": 267, "brand": "xiaomi", "rating": {"average": "2.3", "user_count": 5}, "discount": "10%"},
    {"name": "Xiaomi A1", "price": 199, "brand": "xiaomi", "rating": {"average": "2.1", "user_count": 9}, "discount": "23%"},
    {"name": "Vivo Y75s", "price": 256, "brand": "vivo", "rating": {"average": "4.1", "user_count": 43}, "discount": "16%"},
    {"name": "Vivo iQOO 9T", "price": 476, "brand": "vivo", "rating": {"average": "4.5", "user_count": 134}, "discount": "20%"}
  ];


let sortedProducts = products.sort((a, b) => b.price - a.price);
console.log(sortedProducts);
*/

//n0-09


let products = [
    {"name": "I Phone 13 Pro", "price": 899, "brand": "iphone", "rating": {"average": "4.2", "user_count": 200}, "discount": "20%"},
    {"name": "I Phone 7", "price": 399, "brand": "iphone", "rating": {"average": "3.9", "user_count": 600}, "discount": "0%"},
    {"name": "I Phone sr", "price": 599, "brand": "iphone", "rating": {"average": "4.24", "user_count": 450}, "discount": "20%"},
    {"name": "I Phone 12", "price": 599, "brand": "iphone", "rating": {"average": "4.3", "user_count": 167}, "discount": "14%"},
    {"name": "Samsung Note 10", "price": 699, "brand": "samsung", "rating": {"average": "3.2", "user_count": 154}, "discount": "0%"},
    {"name": "Samsung Note 11", "price": 799, "brand": "samsung", "rating": {"average": "4.7", "user_count": 312}, "discount": "5%"},
    {"name": "A52s", "price": 499, "brand": "samsung", "rating": {"average": "4.6", "user_count": 180}, "discount": "6%"},
    {"name": "A52s 5G", "price": 599, "brand": "samsung", "rating": {"average": "4.4", "user_count": 61}, "discount": "0%"},
    {"name": "I Phone 14", "price": 800, "brand": "iphone", "rating": {"average": "4.8", "user_count": 20}, "discount": "0%"},
    {"name": "I Phone 14 pro max", "price": 1200, "brand": "iphone", "rating": {"average": "5", "user_count": 1}, "discount": "50%"},
    {"name": "Xiaomi Poco Ml5", "price": 267, "brand": "xiaomi", "rating": {"average": "2.3", "user_count": 5}, "discount": "10%"},
    {"name": "Xiaomi A1", "price": 199, "brand": "xiaomi", "rating": {"average": "2.1", "user_count": 9}, "discount": "23%"},
    {"name": "Vivo Y75s", "price": 256, "brand": "vivo", "rating": {"average": "4.1", "user_count": 43}, "discount": "16%"},
    {"name": "Vivo iQOO 9T", "price": 476, "brand": "vivo", "rating": {"average": "4.5", "user_count": 134}, "discount": "20%"}
  ];

  Object.defineProperty(products, "discountProce", {value: "this.price-(this.price*this.discount/100)"});
  //Object.defineProperty(products, "discountPrices", {value:"2008"})
  console.log(products);



  //no-10
  let sortedProductRating = products.sort((a, b) => b.rating - a.rating);
console.log(sortedProductRating);
//no-12
//let sortedProductDiscoundPrice = products.sort((a, b) => b.discount - a.discount);
//console.log(sortedProductRating);


















