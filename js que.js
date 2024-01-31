
//  1. check if number is odd or even in js

// let x = 64;
// if(x%2 == 0) {
//    console.log( "x is an even number " )
// }

// else(console.log("x is an odd number"))


// 2. find the largest of two numbers

// let num_1 = 120 ;
// let num_2 = 90 ;

// if (num_1>num_2) {
//    console.log("num_1 is greater than num_2")
// }
// else(console.log("num_1 is not greater than num_2"))



//  3. find the largest of three numbers

// let x = 50;
// let y = 40;
// let z = 30;

// if ( x>y && x>z){
//     console.log("x is greater than y and z")
// }
//  else {
//     console.log("the given information is not correct")
//  }

// 4 . check if a triangle is equilateral , scalene, or isosceles

// let side_1 = 10;
// let side_2 = 20;
// let side_3 = 30;

// if (side_1 == side_2 && side_2 == side_3 && side_1 == side_3 ) {
//     console.log("The given Triangle is a equilateral Triangle");
// }
// else if (side_1 == side_2 || side_2 == side_3 ) {
//     console.log("The given Triangle is a Isoscele Triangle");
// }
// else if (side_1 != side_2 || side_2 != side_3 || side_1 != side_3) {
//     console.log("The given Triangle is a Scalene Triangle");
// }
// else{
//     console.log("Given input is not in valid form")
// }

// 5.Find that a given number is present in given range.

// let num1 = 250;
// let num2 = 400;
// let num3 = 500;

// if (num1 < num2 && num2 < num3) {
//     console.log("the given number is in a range");
// } else {
//     console.log("the given input is not valid, try again");
// }

// 6. Perform arithmetic operations on two numbers .

// let x = 8 ;
// let y = 5;

// console.log (x+y)
// let x = 6 ;
// let y = 2;
// console.log (x-y)

// let x = 14 ;
// let y = 5;

// console.log (x*y)

// let x = 40 ;
// let y = 5;

// console.log (x/y)

// let x = 42 ;
// let y = 5;

// console.log (x%y)

// let x = 25;
// let y = 2;

// console.log (x**y)

// 7th question

// let year = 1900;
// if (year % 4 === 0 && year % 100 !== 0) {
//   console.log("yes it is a leap year")
//   }
//   else{
//     console.log("No it is not a leap year")
//   }


// 8. Find the grade for input marks for five subjects


// let Math = "79";
// let English = "88";
// let Hindi = "85";
// let Sst = "80";
// let Science = "98";

// let obtained_marks = Math + English + Hindi + Sst + Science;
// let total_marks = 500 ;
// let per = (obtained_marks / total_marks) *100;
// console.log (per);

// if ( per >= 90 && per <= 100) {
//     console.log ("A+")
// }
//  else if ( per >= 80 && per <= 90) {
//     console.log ("A")
// }
//  else if ( per >= 70 && per <= 80) {
//     console.log ("B+")
// }
//  else if ( per >= 60 && per <= 70) {
//     console.log ("B")
// }
//  else if ( per >= 50 && per <= 60) {
//     console.log ("c")
// }
//  else if ( per >= 40 && per <= 50) {
//     console.log ("D")
// }
//  else if ( per >=33) {
//     console.log ("fail")
// }
// else {
//     console.log("the given information is not right pls try again")
// }

// 9.Find number of days in a given month.

// let month = 'aug';

// if ( month == 'jan' || month == 'march' || month == 'may' || month == 'july'|| month ==  'aug' ||month == 'oct' || month == 'dec') {
//     console.log("number of days = 31");
// }
// else if (month == 'feb'){
//     console.log (" number of days = 28");
// }
// else if (month == 'apr' || month == 'june' || month == 'sept' || month == 'nov'){
//     console.log ("number of days = 30")
// }

// else {
//     console.log("pls write right month")
// }

// 11.check whether the number is positive, negative or zero.

// let num = 20;
// if(num > 0) {
//     console.log ("the given number is positive")
// }
// else if ( num <0 ) {
//     console.log ("the given number is negative")

// }
// else {
//     console.log ("the given number is zero")
// }

// 14. sort two numbers   

// let a = 40;
// let b = 30;

// if(a>b){
//     console.log("a,b")
// }
// else {
//     console.log("b,a")
// }

// 15. sort three numbers

// let a = 40;
// let b = 30;
// let c = 60;

// if (a<b && a<b && b<c){
//     console.log("a,b,c")
// }
// else if ( b<a && b<c && c<a ){
//     console.log("b,a,c")
// }
// else if ( c<a && c<b && b<a ){
//     console.log("c,a,b")
// }
// else {
//     console.log("c,b,a")
// }

// Ascending order
// let a = 50;
// let b = 70;
// let c = 20;

// if (a<b && a<c) {
//     if(b<c){
//         console.log("a,b,c");
//     }
//     else{
//         console.log("a,c,b");
//     }

// }

// else if(b<a && b<c){
//     if(a<c){
//         console.log("b,a,c")
//     }
//     else{
//         console.log("b,c,a")
//     }
// }

// else if (c<a && c<b) {
//     if (a<b){
//         console.log("c,a,b")
//     }
//     else{
//         console.log("c,b,a")
//     }
// }

// else{
//     console.log("it is not valid")
// }
// // for descending order
// let A = 30;
// let B = 80;
// let C = 60;

// if(A>B && A>C) {
//     if(B>C){
//         console.log("A,B,C")
//     }
//     else{console.log ("A,C,B")}
// }

// else if (B>A && B>C) {
//     if(A>C){
//         console.log("B,A,C")
//     }
//     else{console.log("B,C,A")}
// }
// else if (C>A && C>B) {
//     if(A>B){
//         console.log("C,A,B")
//     }
//     else{console.log("C,B,A")}
// }

// else{
//     console.log("this is not right")
// }

// const month = 1;

// Switch statement:-

// switch (month) {
//     case 1 : 
//     console.log ("it's january")
//     break;
//     case 2 : 
//     console.log ("it's february")
//     break;
//     case 3 : 
//     console.log ("it's march")
//     break;
//     case 4 : 
//     console.log ("it's April")
//     break;
//     case 5 : 
//     console.log ("it's may")
//     break;
//     case 6 : 
//     console.log ("it's june")
//     break;
//     case 7 : 
//     console.log ("it's july")
//     break;
//     case 8 : 
//     console.log ("it's august")
//     break;
//     case 9 : 
//     console.log ("it's september")
//     break;
//     case 10 : 
//     console.log ("it's octumber")
//     break;
//     case 11 : 
//     console.log ("it's novmber")
//     break;
//     case 12 : 
//     console.log ("it's december")
//     break;
//     default:
//         console.log("pls enter right month")
// }

// Ternory Operator :-

// Questions based on Switch Statement

// 1.Check if a number is odd or even in JavaScript.

// let num = 23;
// let num2 =(num %2);


// switch(num2) {
//     case 0 : 
//     console.log("the given number is even")
//     break;
//     case 1 :
//     console.log("the given number is odd ")
//     break;
//     default:
//         console.log("the given input is not valid")
// }

// 2. Find the largest of two numbers. 

// let a = 45
// let b = 35
// let num = (a>b || a<b)
// switch (num){
//     case (a>b) : 
//     console.log("a is greater than b")
//     break;
//     case (a <b) :
//         console.log("b is greater than a")
//         default : 
//         console.log("the given input is not true")
// }

// 3. Find the largest of three numbers.

// let num1 = 180;
// let num2 = 150;
// let num3 = 620;
// let sum = (num1 > num2 || num2 > num3 || num3 > num1)

// switch (sum) {
//     case (num1 > num2):
//         console.log("num1 is greater than num2")
//         break;
//     case (num2 > num3):
//         console.log("num2 is greater than num3")
//         break;
//     case (num3 > num1):
//         console.log("num3 is greater than num1")
//         break;
//         default:
//             console.log("the given input is not valid")


// }

// 4. Check if a triangle is equilateral, scalene, or isosceles.

// let side1 = 12; 
// let side2 = 12;
// let side3 =12;
//     switch (true) {
//       case (side1 === side2 && side2 === side3):
//         console.log("Equilateral Triangle");
//         break;
//       case (side1 === side2 || side1 === side3 || side2 === side3):
//         console.log("Isosceles Triangle");
//         break;
//       default:
//         console.log("Scalene Triangle");
//     }


// 5. Find that a given number is present in given range.

// const number = 55;
// const midRange = 30;
// const maxRange = 60;

// switch (true) {
//   case (number < midRange):
//     console.log('Number  is less than midRange');
//     break;
//   case (number > maxRange):
//     console.log("Number  is greater than maxRange" );
//     break;
//   default:
//     console.log("Number  is within the range");
// }

// 6. Perform arithmetic operations on two numbers .

// let  a = 10;
// let   b = 5;
// let  operations = "+"
// let result;

// switch(operations) {
//   case ('+'):
//      console.log ("result = a + b")
//     break;
//   case ('-'):
//     console.group("a-b")
//     break;
//   case ('*'):
//     console.group("a*b")
//     break;
//   case ('%'):
//     console.group("a%b")
//     break;
//   case ('/'):
//     console.group("a/b")
//     break;
//     default:
//       console.log("the given input is not true")
// }

// 8. Find the grade for input marks for five subjects


// let English = 78;
// let Hindi =  88;
// let Math = 85;
// let Sst = 70;
// let Science = 90;
// let total_num = 0;
// let marks = 500;

// const average = total_num / marks;
// switch (true) {
//     case average >= 90:
//       console.log("Grade: A");
//       break;
//     case average >= 80:
//       console.log("Grade: B");
//       break;
//     case average >= 70:
//       console.log("Grade: C");
//       break;
//     case average >= 60:
//       console.log("Grade: D");
//       break;
//     case average >= 50:
//       console.log("Grade: D");
//       break;
//     case average >= 33:
//       console.log("Grade: D");
//       break;
//     default:
//       console.log("Grade: F");
//       break;
//   }

// 9. Find number of days in a given month

// const month = 10;
// switch (month) {
//     case 1 : 
//     console.log ("Number of Days : 31")
//     break;
//     case 2 : 
//     console.log ("Number of Days : 28")
//     break;
//     case 3 : 
//     console.log ("Number of Days : 31")
//     break;
//     case 4 : 
//     console.log ("Number of Days : 30")
//     break;
//     case 5 : 
//     console.log ("Number of Days : 31")
//     break;
//     case 6 : 
//     console.log ("Number of Days : 30")
//     break;
//     case 7 : 
//     console.log ("Number of Days : 31")
//     break;
//     case 8 : 
//     console.log ("Number of Days : 31")
//     break;
//     case 9 : 
//     console.log ("Number of Days : 30")
//     break;
//     case 10 : 
//     console.log ("Number of Days : 31")
//     break;
//     case 11 : 
//     console.log ("Number of Days : 30")
//     break;
//     case 12 : 
//     console.log ("Number of Days : 31")
//     break;
//     default:
//         console.log("pls enter right month")
// }

// check whether the number is positive, negative or zero.

// const  number = 5;
// switch(true){
//   case(number > 0):
//   console.log ("the given number is positive")
//   break;
//   case(number < 0):
//   console.log ("the given number is negative")
//   break;
//   default:
//     console.log("the given number is zero")
// }

// Write a JavaScript program to check if a number is divisible by 3, 5, or 7.

// const number = 30;

// switch(true){
//   case(number % 3 === 0):
//   console.log("the given number is divisible by 3")
//   break;
//   case(number % 5 === 0):
//   console.log("the given number is divisible by 5")
//   break;
//   case(number % 7 === 0):
//   console.log("the given number is divisible by 7")
//   break;
//   default:
//     console.log ("the given number is not divisibl by 3,5,7")
// }

// sort two numbers

// const a = 50;
// const b = 40;
// switch(true){
//   case(a>b):
//   console.log("b,a")
//   break;
//   default:
//     console.log("a,b")
// }






// loops Questions

// 1. Write a JS code to display all the even numbers from 1 - 40.

// By while loop

// let num = 0 ;
// while(num <= 40){
//     if (num%2==0) {
//         console.log (num);
//         }
//         num++
// }

// let num = 0 ;

// do{
//     if(num%2 == 0){
//         console.log(num);
//     }
//     num++
// }
// while(num <= 40);

// num = 0;

// for( let num = 0; num <= 40;) {
//     if(num%2==0){
//         console.log(num)
//     }
//     num++
// }

// 2. Write a JS code to display sum off all numbers from 1 to 100. 

// by while loop 

// let num = 1;
// let sum = 0 ;

// while(num <= 100){
//     sum += num;
//     num++
// }
// console.log(sum);

// by do while loop

// let a = 1;
//  let sum = 0 ;

//  do {
//         sum += a;
//         a++
//  }
// while(a<=100)
// console.log(sum );

// by for loop

// let sum = 0; 

// for (let i = 1; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);

// 3. Write a JS code to display all the even numbers up to n. (this n should be given by user using prompt)

// let n = 130;
// let num = 1;

// while(num <=n){
//     if(num%2==0){
//         console.log(num);
//     }
//     num++
// }

// let n = 14;
// for ( let num = 0; num<=n;){
//     if(num%2 == 0){
//         console.log(num)
//     }
//     num++
// }


// 4. Write a JS code to display sum off all even numbers from 1 to 100. (also code this question for negative integer)

// let num = 0;
// let sum = 0;

// while(num <= 100) {


//     if(num%2 == 0){
//         sum += num;
//     }
//     num++;

// }
// console.log(sum);

// let num = 1;
// let sum = 0;

// do{
//     if(num%2==0) {
//         sum+=num;
//     }
//     num++;
// }
// while(num <= 100)
//     console.log(sum);

// let sum = 0; 
// for(let num = 1; num <= 100;) {
//     if(num%2==0){
//         sum+= num;
//     }
//     num++
// }
// console.log(sum);

// this question for negative integer
// let num = 0;
// let sum = 0;

// while(num <= 100) {


//     if(num%2 == 0){
//         sum -= num;
//     }
//     num++;

// }
// console.log(sum);

// let num = 1;
// let sum = 0;

// do{
//     if(num%2 == 0){
//         sum -= num;
//     }
//     num++
// }
// while(num<=100);
// console.log("for negative integer" , sum)

// let sum = 0;

// for(let num = 1; num<=100;){
//     if(num%2==0){
//         sum -= num
//     }
//     num++
// }
// console.log(sum);

// 5 -- Write a JS code to display sum off all odd numbers from 1 to 100. (also code this question for negative integer)

// let sum = 0;
// let num = 1;

// while(num<=100){
//     if(num%2 != 0){
//         sum+=num
//     }
//     num++
// }
// console.log( "the sum of all odd num from 1 to 100 :-" , sum);

// let sum = 0;
// let num = 1;
// do {
//     if (num%2 != 0){
//         sum+=num;
//     }
//     num++;
// }
// while(num<=100);
// console.log("the sum of all odd num from 1 to 100 :-" ,sum);

// let sum = 0;
// for(num=1; num<=100; num++){
//     if(num%2 != 0){
//         sum+=num;
//     }

// }
// console.log("the sum of all odd num from 1 to 100 :-" ,sum)

// this question for negative integer

// let sum = 0;
// let num = 1;
// while(num<=100){
//     if(num%2 != 0){
//         sum-=num;
//     }
//     num++
// }
// console.log( "For negative integer:-",sum);


// 5. Write a JS code using any loop to print all the positive integers from 1 to 110. If a number is multiple of 3, 5, or 7 then a msg of multiple will be shown just next to the number.

// let num = 1;
// while(num<=110){
//     if(num%3==0){
//         console.log(num + " :- multiple of 3");
//     }
//     num++
// }

// Write a while loop that prints the positive integers less than 106 that are divisible by both 3 , 5 and 7.

// for (let sum = 1; sum<=105; sum++) {
// if(sum%3==0 && sum%5==0 && sum%7==0){
//     console.log(sum ,'multiple of 3,5,7')
// }
// else if (sum%3==0 && sum%5==0){
//     console.log(sum ,'multiple of 3,5')
// }
// else if (sum%3==0 && sum%7==0){
//     console.log(sum ,'multiple of 3,7')
// }
// else if (sum%5==0 && sum%7==0){
//     console.log(sum ,'multiple of 3,7')
// }
// else if (sum%3==0 ){
//     console.log(sum ,'multiple of 3')
// }
// else if (sum%5==0 ){
//     console.log(sum ,'multiple of 5')
// }
// else if (sum%7==0 ){
//     console.log(sum ,'multiple of 7')
// }
// else {
//     console.log(sum)
// }

// }


// // nested loop

// for(let row =1; row <= 100;  row +=10){
//     for( let column = row; column < row+10; column++) {
//         document.write(column + " ");
//     }
//     document.write("<br>")
// }

// document.write("<br>");
// for (let a = 1; a<=10; a++){
//     for(let b = a; b<a+91; b+=10){
//         document.write(b , " ")
//     }
//     document.write("<br>");
// }
// document.write("<br>");

// 1.
// for(let a = 1; a<=5; a++){
//     for(let b = 1; b<=a; b ++){
//         document.write(a," ");
//     }
//     document.write("<br>");
// }
// document.write("<br>");

// 2.
// for(let a = 1; a<=5; a ++) {
//     for(let b = 1; b<=a; b++){
//         document.write(b," " )
//     }
//     document.write("<br>")
// }
// document.write("<br>");
// 3.
// for(let a= 5; a>=1; a--){
//     for(let b=1; b<=a; b++){
//         document.write(a,' ');
//     }
//     document.write("<br>")
// }
// document.write("<br>");

4.
// for(let a= 5; a>=1; a--){
//     for(let b= 1; b<=a; b++){
//         document.write(b," ");
//     }
//     document.write("<br>");
// }
// document.write("<br>");
5.
// for(let a= 5; a>=1; a--){
//     for(let b= 5; b>=a; b--){
//         document.write(b," ");
//     }
//     document.write("<br>");
// }
// document.write("<br>");
7.
// for(let a= 4; a>=1; a--){
//     for(let b= 5; b>=a; b--){
//         document.write(b," ");
//     }
//     document.write("<br>");
// }
// document.write("<br>");
8.
// let k = 0;
// for(let a = 1; a<=5; a++){
//     for(let b = 1; b<=a; b ++){
//         k++;
//         document.write(k + " ");
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// 1.
//  for(let a = 1; a<=5; a++){
//     for(let b = 1; b<=a; b ++){
//         document.write("*" , " ","&nbsp");
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// 2.
// for(let a= 5; a>=1; a--){
//     for(let b= 1; b<=a; b++){
//         document.write("*", "&nbsp ");
//     }
//     document.write("<br>");
// }
// document.write("<br>");
3.
// for(let a = 1; a<=5; a++){
//     for(let c =1; c<=5-a; c++){
//         document.write("&nbsp","&nbsp")
//     }
//     for(let b = 1; b<=a; b++){
//         document.write(b," ","&nbsp")
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// 4.
// for(let a = 1; a<=5; a++){
//     for(let c =1; c<=5-a; c++){
//         document.write("&nbsp","&nbsp","&nbsp")
//     }
//     for(let b = 1; b<=a; b++){
//         document.write('*'," ")
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// 5.
// for(let a = 5; a>=1; a--){
//     for(let c= 1; c<=5-a; c++){
//         document.write("&nbsp","&nbsp","&nbsp")
//     }
//     for(let b= 1; b<=a; b++){
//         document.write("*"," ");
//     }
//     document.write("<br>");
// }
// document.write("<br>");

// 6. sidha pyramid

// for (let a = 1; a<6; a++){
//     for(let b = 6; b>a; b--){
//         document.write(" &nbsp; ","&nbsp");
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         document.write("* ","&nbsp")
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// 7.ulta pyramid
// for(let a=5; a>=1; a--){
//     for(let b =5; b>=a; b--){
//         document.write(" &nbsp; " ,"&nbsp")
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         document.write("* ","&nbsp")
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// 8.
// for(let a=5; a>=1; a--){
//     for(let b =5; b>=a; b--){
//         document.write(" &nbsp; "," &nbsp; ")
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         document.write("*"," ","&nbsp")
//     }
//     document.write("<br>");
//  }
// for (let a = 2; a<6; a++){
//     for(let b = 6; b>a; b--){
//         document.write(" &nbsp; "," &nbsp; ");
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         document.write("*"," "," &nbsp")
//     }
//     document.write("<br>",);
// }
// document.write("<br>",);

// 9.
// for(let a=1; a<=5; a++){
//     for(let b = 1; b<=a; b++){
//         document.write("*"," ","&nbsp")
//     }
//     document.write("<br>")
// }
// for(let a = 4; a>=1; a--){
//     for(let b = 1; b<=a; b++){
//         document.write("*"," " ,"&nbsp")
//     }
//     document.write("<br>")
// }
// document.write("<br>")

// 10.
// for (let a = 1; a <= 5; a++) {
//     for (let c = 1; c <= 5 - a; c++) {
//         document.write("&nbsp", "&nbsp", "&nbsp")
//     }
//     for (let b = 1; b <= a; b++) {
//         document.write("*", " ")
//     }
//     document.write("<br>")
// }
// for (let a = 4; a >= 1; a--) {
//     for (let c = 1; c <= 5 - a; c++) {
//         document.write("&nbsp", "&nbsp", "&nbsp")
//     }
//     for (let b = 1; b <= a; b++) {
//         document.write("*", " ");
//     }
//     document.write("<br>");
// }
// document.write("<br>")

// 11.

// for (let a = 1; a<6; a++){
//     for(let b = 6; b>a; b--){
//         document.write(" &nbsp; " , " &nbsp");
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         document.write("*"," "," &nbsp")
//     }
//     document.write("<br>");
// }
// for(let a=4; a>=1; a--){
//     for(let b =5; b>=a; b--){
//         document.write(" &nbsp; " ," &nbsp")
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         document.write("*"," ","&nbsp")
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// 12.

// for(let a=1; a<=3; a++){
//     for(let b=1; b<=15; b++){
//        if((b>=5-a && b<=5+a || b>=12-a && b<=12+a)){
//         document.write("*",);
//        }
//        else{
//         document.write(" "," &nbsp","&nbsp");
//        }
//        document.write("&nbsp","&nbsp",)
//     }
//     document.write("<br>");
// }
// for(let a=8; a>=1; a--){
//     for(let b =8; b>=a; b--){
//         document.write(" &nbsp; " ," &nbsp")
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         document.write("*"," ","&nbsp")
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// 13.

// for(a=1; a<=7; a++){
//     for(b=1; b<=5; b++){
//         document.write("&nbsp","&nbsp",)
//         if(a==1 || a==7 || b==1 || b==5){
//             document.write("*","&nbsp")
//         }
//         else
//         document.write(" ","&nbsp" , "&nbsp")
//     }

//     document.write("<br>");
// }
// document.write("<br>");
// 14.

// for (let a = 1; a<5; a++){
//         for(let b = 6; b>a; b--){
//             document.write(" &nbsp; " , " &nbsp");
//         }
//         for(let k =1; k<=((2*a)-1);k++){
//             if(a==1 || a==4 || k==1 || k==((2*a)-1)){
//                 document.write("*", "&nbsp",)
//             }
//             else
//             document.write("&nbsp","&nbsp","&nbsp",)
//         }
//         document.write("<br>");
//     }
// document.write("<br>");
// 15.
// for(let a = 1; a<=5; a++){
//     for(let b = 1; b<=a; b ++){
//         document.write("*" , " ","&nbsp");
//     }
//     document.write("<br>");
// }
// document.write("<br>");
// 16.
// for(let a = 1; a<=6; a++){
//     for(let b = 1; b<=a; b ++){
//         if(a==1 || a==6 || b==1 || b==a){
//             document.write("*","&nbsp")
//         }
//         else
//         document.write(" " , "&nbsp","&nbsp")
//     }

//     document.write("<br>");
// }
// document.write("<br>");
// 17.
// for (let a = 1; a<6; a++){
//     for(let b = 6; b>a; b--){
//         document.write(" &nbsp; " , " &nbsp");
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         if(a==1 || a==6 || k==1 || k==((2*a)-1)){
//             document.write("*"," &nbsp")
//         }
//         else
//         document.write(" "," &nbsp" ," &nbsp",)
//     }
//     document.write("<br>");
// }
// for(let a=4; a>=1; a--){
//     for(let b =5; b>=a; b--){
//         document.write(" &nbsp; " ," &nbsp")
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         if(a==5 || a==1 || k==1 || k==((2*a)-1)){
//             document.write("*"," &nbsp",)
//         }
//         else
//         document.write(" "," &nbsp" ," &nbsp",)
//     }
//     document.write("<br>");
// }
// document.write("<br>");

// make letter- S

// for (let a = 1; a<6; a++){
//     for(let b = 7; b>a; b--){
//         document.write("&nbsp; ","&nbsp ");
//     }
//     for(let k =2; k<=((2*a)-1);k++){
//         if(a==1 || a==6 || k==2 || k==((2*a)-1)){
//             document.write("*","&nbsp")
//         }
//         else
//         document.write(" "," &nbsp" ,"&nbsp","&nbsp ")
//     }
//     document.write("<br>");
// }
// for(let a=1; a<=5; a++){
//     for(let c=a; c<=a; c++){
//         document.write("&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp",)
//     }
//     for(let b = 1; b<=a; b++){
//         if(a==1 || b==a){
//             document.write("* "," &nbsp" ," &nbsp"," &nbsp")
//         }
//         else
//         document.write(" "," &nbsp" ," &nbsp","&nbsp ")
//     }
//     document.write("<br>")
// }
// for(let a=5; a>=1; a--){
//   for(let b=5; b>=a; b--){
//       document.write("&nbsp &nbsp")
//   }
//   for(let k=2; k<=((2*a)-1);k++){
//       if( a==1 || k==2 || k==((2*a)-1)){
//           document.write("* &nbsp; ")
//       }
//       else
//       document.write("&nbsp &nbsp")
//   }
//   document.write("<br>");
// }
// document.write("<br>");


// make a P letter 

// for (let a= 1; a<=5; a++){
//     for(let c=1; c<=5; c++){

//     }
//    for(let b =1; b<=5; b++){
//     if(a==1 || a==5 || b==1 || b==5){
//         document.write("*")
//     }
//     else 
//     document.write(" " ,"&nbsp","&nbsp ", )
//    }
//    document.write("<br>")
// }

// for(let a=1; a<=4; a++){
//     document.write("*")
//     document.write("<br>" )
// }

// matrix

// for(let a=1; a<11; a++){
//   for(let b=1; b<=10; b++){
//     document.write("(",a ," ," , b,")"," ")
//   }
//   document.write("<br>")
// }

// let username = prompt("what is your age ?")
// if(username >=18) {
//     console.log("you are eligible to go inside the club")
// }
// else{
//     console.log("you are not eligible to go inside the club")
// }

// Practice Question 

// 1 . Write a JS program to check whether the given input is a armstrong number or not.

// let num1 = prompt("Pls Enter a number");
// let num2 = num1;
// let sum = 0;
// while(num2>0){
//     let digit = num2 % 10;
//     sum += digit**3;
//     num2 = parseInt(num2/10);
// }
// if(sum==num1){
//     console.log(`${num1} is an armstrong number`);
// } 
// else{
//     console.log(`${num1} is not a armstrong number`);
// }

// 2.Write a JS program to print all prime numbers within a given interval. (starting and endpoint should be given by user).

// let start = parseInt(prompt("Enter the starting point of the interval:"));
// let end = parseInt(prompt("Enter the ending point of the interval:"));

// console.log(`Prime numbers between ${start} and ${end} are:`);

// for (let i = start; i <= end; i++) {
//     let isPrime = true;

//     if (i === 1) {
//         isPrime = false;
//     } else if (i > 1) {
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     } else {
//         isPrime = false;
//     }

//     if (isPrime) {
//         console.log(i);
//     }
// }
// let num = 3;
// for (let i = 1; i <= 10; i++) {
//   let result = 3 * i;
//   console.log(`3 * ${i}  =  ${result}`);
// }

// 3.Write a JS program to check whether the given input is a even number or odd number without using modulus (%).

// let number = prompt("enter a number");

// if ((number / 2) === 0) {
//   console.log(`${number} is an even number.`);
// } else {
//   console.log(`${number} is an odd number.`);
// }

// 4. Write a JS program to check whether the given input is a palindrome or not.

// let num = 121; 
// let num1 = num;
// let reverse = 0;

// while(num != 0 ){
//     reverse = (reverse * 10) + (num %10);
//     num = parseInt(num/10);
// }
// if(num1 == reverse){
//     console.log(reverse + " is a Palindrome number");
// }
// else {
//     console.log(reverse + " not a Palindrome number")
// }

// 5.Write a JavaScript program to get the first n Fibonacci numbers.

// let num = prompt("Enter a number"); 

// let  x = 0; 
// let y = 1; 
// let z = x+y;
// console.log(x);
// while(z< num){
//     z = x+y;
//     x = y;
//     y = z;
//     console.log(z);
// }

// table

// let digit = 36;
// for (let a = 1; a<=10; a++){
//     let b = digit * a;
//     // console.log(b);
//      console.log(` ${digit} * ${a}  =  ${b}`);
// }

// without using length method 

// let arr = [12, 23, 34, 32, 44, 33, 44,45];
// let length = 0;
// for (let i = 0; arr[i] != undefined; i++) {
//     length++;
// }
// console.log(length);

// array question 

//1.  Insert an item into array at specific index in JavaScript ?

// let Array = [1, 2, 3, 4, 5];
// let indexToInsert = Number(prompt("enter a index value"))
// let itemToInsert =  Number(prompt("enter a item value"))

// for (let i = 0; i < Array.length; i++) {
//     if (i == indexToInsert) {
//         Array[i] = itemToInsert;
//     }
// }
// console.log(Array);

// // other type 

// let array = ['a', 'b', 'c', 'd','e']; 
// let index = prompt("enter a index number"); 
// let newItem = prompt("enter for replace a number"); 

// array[index] = newItem;

// console.log(array); 

// 2.Remove an element from an array in JavaScript?

// let array = ['a', 'b', 'c', 'd'];
// let indx = 1;
// for (let i = indx; i < array.length - 1; i++) {
//     array[i] = array[i + 1];
// }
// array.length = array.length - 1;
// console.log(array);

// let array = ['a', 'b', 'c', 'd'];
// let indx = 2;
// for (let a = indx; a<array.length-1; a++){
//     array + 1 != indx;
// }
// console.log(array);

// 3. From a new array and remove all the duplicate elements in a JavaScript array?

// let array = ['a', 'b', 'c', 'd', 'a', 'b','c']; 
// let newArray = []; 
// for (let i = 0; i < array.length; i++) {
//   let found = false; 

//   for (let j = 0; j < newArray.length; j++) {
//     if (array[i] === newArray[j]) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     newArray[newArray.length] = array[i];
//   }
// }
// console.log(newArray);

// 5.How do you check if an element exists in an array?

// let myArray = [1, 2, 3, 4, 5];
// let targetElement = 3;
// let elementExists;

// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === targetElement) {
//         elementExists = i; 
//         break; 
//     }
// }

// if (elementExists !== undefined) {
//     console.log("Element exists in the array at index:", elementExists);
// } else {
//     console.log("Element does not exist in the array.");
// }


// 6.How do you swap any two numbers in a given array?

// let array = [1, 2, 3, 4, 5]; 
// let index1 = prompt("Enter first number"); 
// let index2 = prompt("Enter second number"); 

// let temp = array[index1]; 
// array[index1] = array[index2]; 
// array[index2] = temp; 
// console.log(array); 

// 4.Replace an item from an array in JavaScript?

// let array = ['a', 'b', 'c', 'd','e']; 
// let index = prompt("enter a index number"); 
// let newItem = prompt("enter for replace a number"); 

// array[index] = newItem;

// console.log(array); 


//  Make the logic without using  array's method 

// 1. sorting                      

// let arr = [12,34,5,3,22];
// let swap =0;
// for(let a=0; a<arr.length; a++){
//     for(let b=1+a; b<arr.length; b++){
//         if(arr[a]>arr[b]){
//             swap = arr[a];
//             arr[a] = arr[b];
//             arr[b] = swap;    
//             }
//     }
// }
//     document.write(arr)

// 2. Reverse

// let arr = [1,2,3,4,5,7];

// for (let a = arr.length - 1; a >= 0; a--) {
//     document.write(" " + arr[a]);  
//     document.write(typeof (arr));  
// }

// 3.push 

// let arr = [1, 2, 3, 4, 5];
// let elementToAdd = 7;
// let newIndex = arr.length;
// arr[newIndex] = elementToAdd;
// document.write(arr);

// 2nd method

// let array = [1, 2, 3, 4, 5, 6];
// let elementToAdd = 7;
// for(let i =0; i<=array.length; i++){
//     if(array[i] == array.length){
//         array[i+1] = elementToAdd;
//     }
// }
// document.write(array);


// 4. pop

// let arr = [1, 2, 3, 4, 5,6];
// let newIndex = arr.length-1;
// arr[newIndex] = arr;
// document.write(arr+"<br>");

// 5. shift() :

// let Array = [1, 2, 3, 4, 5];
// let elementToAdd = 6;

// for (let i = Array.length - 1; i >= 0; i--) {
//     Array[i + 1] = Array[i];
//     if (i == 0) {
//         Array[i] = elementToAdd;
//     }
// }
// document.write(Array + "<br>");

// 2nd method :-

// let myArray = [1, 2, 3, 4];
// for (let i = myArray.length - 1; i >= 0; i--) {
//   myArray[i + 1] = myArray[i];
// }
// myArray[0] = 13;
// document.write(myArray); 

// 6. unshift

// let Array = [1, 2, 3, 4, 5];

// for (let i = Array.length - 1; i >= 0; i--) {
//     Array[i] = Array[i-1];
//     if (i == 0) {

//     }
// }
// document.write(Array + "<br>");


// 7. concat

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// document.write( arr1 +","+ arr2);

// 8. isArray

// let arr = [1, 2, 3, 4, 5];
// let existElement = 4;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === existElement) {
//         document.write("Element exists in the array.");
//         break;
//     } else if (i === arr.length - 1) {
//         document.write("Element does not exist in the array.");
//     }
// }

// 9. find

// let arr = [1, 2, 3, 4, 5, 6];
// document.write(arr + "<br>");

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 5) {
//       document.write(arr[i]); break;
// }
// }

// 10. FindIndex
// let arr = [1, 2, 3, 4, 2, 6];
// document.write(arr + "<br>");

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 5) {
//       document.write(i +","); break;
// }

// }

// 11. indexof 

// let arr = ["Sneha","Shital","Priya","Vani","Samarpit","sneha"];
// let ary = "sneha";
// for(let a=0; a<arr.length; a++){
//     if(arr[a]=ary){
//         document.write("Index of " + ary + ": " + a + "<br>"); break;
//     }
// }

// 12.last IndexOf

// let arr = ["Sneha", "Shital", "Priya", "Vani", "Samarpit", "sneha"];
// let ary = "sneha";

// for (let a = arr.length; a >= 0; a--) {
//     arr[a] = arr[a - 1];
//     if (a == 0) {

//     }
//     document.write(" last Indexof " + ary + ": " + a + "<br>"); break;
// }

// 13. some

// let arr = [12,2,8,32,54,6];
// document.write(arr + "<br>")
// let found = false;
// for(let a=0; a<arr.length; a++){
//     if(arr[a]>=18){
//         found=true;
//         document.write(arr[a]);
//         break;
//     }
// }

// 14. Every

// 15. for each 

// let arr = [12,2,8,32,54,6]; 
// for(let a=0; a<arr.length; a++){
//     document.write(a + ":" +arr[a]+ "<br>")
// }

// 17. map

// let arr = [20,30,40,50];
// document.write(arr + "<br>");
// let ary = [];
// for(let a=0; a<arr.length; a++){
// ary[a] = arr[a] + 30; 
// document.write(ary[a] + " ")
// }

// 18. tostring 

// let arr = [1,2,3,4,5,6,7];
// document.write(arr  + "<br>"+ typeof arr  +"<br>")
// let string = " ";

// for(let a=0; a<arr.length; a++){
//     string = string + arr[a];
    
//     }
//     document.write(string )

// 19. join

// let arr = [1,2,3,4,5,6]
// for(let a= 0; a<arr.length; a++){
//     document.write(arr[a] );
//     if(a<arr.length-1){
//         document.write("-" + " ")
//     }
// }


// // Strings Methods :

// string  method without using convrsion 

// // 1. Length : 

// let str = "hello sneha";

// let length = 0;

// for(let a=0; str[a]!==undefined; a++){
//     length++
// }
// document.write(str +"<br>")
// document.write("length of the string:-" , length);


// 2.  toLowerCase :

// let str = "Hello, World!";
// let lowercaseStr = '';
// for (let char of str) {
  
//     if (char >= 'A' && char <= 'Z') {
//         lowercaseStr += String.fromCharCode(char.charCodeAt(0) + 32);
//     } else {
//         lowercaseStr += char;
//     }
// }

// document.write("Original String:", str);
// document.write("String in lowercase:", lowercaseStr);


// 3.toUpperCase

// let str = "hello sneha";
// let UppercaseStr = " " ;

// for(let char of str){
//     if(char>='a' && char<='z'){
//         UppercaseStr += String.fromCharCode(char.charCodeAt(0) - 32); 
//     }
//     else{
//         UppercaseStr +=char;
//     }
// }

// document.write("Original String:", str);
// document.write("String in  Uppercase:", UppercaseStr);

// 4. includes :

// let str = "Hello, World!";
// let substring = "World";

// let found = false;

// for (let i = 0; i <= str.length - substring.length; i++) {
//     let match = true;
    
//     for (let j = 0; j < substring.length; j++) {
//         if (str[i + j] !== substring[j]) {
//             match = false;
//             break;
//         }
//     }
//     if (match) {
//         found = true;
//         break;
//     }
// }

// document.write("String:", str +"<br>");
// // document.write("Substring:", substring);
// document.write("Substring found:", found);

// 5. startsWith :

// let str = "hello my name is sneha ";
// let substring = "hello";

// let startsWith = true;

// for (let i = 0; i < substring.length; i++) {
//     if (str[i] !== substring[i]) {
//         startsWith = false;
//         break;
//     }
// }

// document.write("String:", str +"<br>");
// document.write("Starts with substring:", startsWith);

// 6.endsWith :

// let str = "hello my name is sneha";
// let substring = "sneha";
// let endWith = true;

// for (let a = 0; a < substring.length; a++) {
//     let strIndex = str.length - substring.length + a;

//     if (str[strIndex] !== substring[a]) {
//         endWith = false;
//         break;
//     }
// }
// document.write("String:", str + "<br>");
// document.write("Ends with substring:", endWith);


// 7. indexOf

// let arr = 'my name is sneha jain';
// let ary = 'sneha';
// let index = 1;

// for (let i = 0; i <= arr.length - ary.length; i++) {
//     let found = true;
//     for (let j = 0; j < ary.length; j++) {
//         if (arr[i + j] !== ary[j]) {
//             found = false;
//             break;
//         }
//     }
//     if (found) {
//         index = i;
//         break;
//     }
// }

// document.write("Index of " + ary + ": " + index);

// 8. lastIndexOf

// let str = "hello my name is sneha jain";
// let sub = "sneha";
// let lastIndex = -1;
// for (let i = 0; i <= str.length - sub.length; i++) {
//     let match = true;

//     for (let j = 0; j < sub.length; j++) {
//         if (str[i + j] !== sub[j]) {
//             match = false;
//             break;
//         }
//     }

//     if (match) {
//         lastIndex = i;
//     }
// }

// document.write("String:", str + '<br>');
// // document.write("Substring:", sub);
// document.write("Last index of substring:", lastIndex);

// 9. repeat

// let str = "hello";
// let repeat = 3;
// let result = ' ';

// for (let a = 0; a < repeat; a++) {
//     result += str;
// }
// document.write("String:", str +"<br>");
// document.write( result);


// 10.  concat 

// let str1 = "Hello Everyone";
// let str2 = "I love js";

// document.write(str1 + " " + str2);

// 11.  substr

// let str = "JavaScript is an interesting language";
// let start = 4;
// let length = 10;

// if (start < 0) {
//     start = str.length + start;
// }
// let result = '';
// for (let i = start; i < start + length && i < str.length; i++) {
//     result += str[i];
// }
// document.write( str +"<br>");
// document.write( result);

// 12.   toString 

// let Str = 123;
// let result = Str + '';

// document.write( result +"<br>");
// document.write(typeof result);

// 13. char At 

// let str = "Hello, world!";
// let index = 6;

// let charAtIndex = '';

// if (index >= 0 && index < str.length) {
//     charAtIndex = str[index];
// }

// document.write( str +"<br>");
// document.write( index + ":", charAtIndex);


// js  practice question 

// 1.  Write a Js code to print numbers from 1 to 10.

// let num = 1;
// for (let a=1; a<=10; a++ ){
//     console.log(a)
// }

// 2. Write a js code to print a 2D Arrays

// let arr = [
//     ["Harry",18,"Male","B.sc"],
//     ["Anil",19,"Male","B.Com"],
//     ["Priya",118,"Female","B.sc"],
//     ["Suhana",17,"Female","B.A"]
// ];

// for (let a = 0; a<4; a++){
//     for (let b =0; b<4; b++){
//         document.write(arr[a][b] + " ");
//     }
//     document.write("<br>");
// }

// 3.  Display sum off all natural numbers

// let num = Number(prompt("Enter a number"));
// let sum = 0;
// for (let a = 0; a <= num; a++) {
//     sum += a;
// }
// document.write(sum);

// 4. write a Js code to print the Even numbers in given array using loop.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (let a=0; a<=arr.length; a++){
//    if(arr[a]%2==0){
//     document.write(arr[a] + " ")
//    } 
// }

// 5. Write a js code to print a stair of number using loop. 

// for(let a = 1; a<=5; a++){
//   for(let c =1; c<=5-a; c++){
//       document.write("&nbsp","&nbsp","&nbsp")
//   }
//   for(let b = 1; b<=a; b++){
//       document.write(b," ")
//   }
//   document.write("<br>");
// }
// document.write("<br>");


// 6. Write a JS code to print a pyramid of * using loop.

// for (let a = 1; a<6; a++){
//   for(let b = 6; b>a; b--){
//       document.write(" &nbsp; " , " &nbsp");
//   }
//   for(let k =1; k<=((2*a)-1);k++){
//       document.write("*"," "," &nbsp")
//   }
//   document.write("<br>");
// }

// 7. Write a JS code to find the no of digits in a number. 

// let num = 1234; 
// let count = 2;

// if (num === 0) {
//   count = 1; 
// } else {
//   while (num !== 0) {
//     num = Math.floor(num / 10); 
//     count++;
//   }
// }
// console.log("Number of digits in", num, "is", count);

// 8. Write a JS code to calculate the sum of digits in a number. 

// let num = 1234545; 
// let sum = 0;

// while (num > 0) {
//   const digit = num % 10; 
//   sum += digit; 
//   num = Math.floor(num / 10); 
// }

// console.log("Sum of digits in", num, "is", sum);

// 2nd method

// let num = 12345; 
// let sum = 0;

// for (let a = num; a > 0; a = Math.floor(a / 10)) {
//   let digit = a % 10; 
//   sum += digit; 
// }

// document.write("Sum of digits in", num, "is", sum);

// 9. Write a JS code to find the largest number in an array using for loop. 

// let number = [12, 5, 27, 8, 16,63];
// let largestNumber =number[0];

// for(let a=1; a<number.length; a++){
//    if(number[a]>largestNumber){
//     largestNumber = number[a];
//    }
// }
// document.write("The largest number is:", largestNumber);

// 10. Write a JS code to find the number of zeros in 2D Matrix.

// let arr = [
//     [0,2,3,4],
//     [6,0,8,0],
//     [0,12,11,0,0]
// ];
// let zero = 0;
// for(let a=0; a<arr.length; a++){
//     for(let b=0; b<arr[a].length; b++){
//         if(arr[a][b]==0){
//             zero++
//         }
//     }
// }
// document.write(zero)

// 11. Write a JS code to find product of two arrays.

// let array1 = [1, 2, 3, 4];
// let array2 = [5, 6, 7, 8];
// let product = 0;

// if (array1.length === array2.length) {  
//     product = 1;
//     for (let i = 0; i < array1.length; i++) {
//         product *= array1[i] * array2[i];
// // product = product * (array1[i] * array2[i]);
//     }

//     document.write("Product of arrays:", product);
// } else {
//     document.write("Arrays must have the same length for multiplication.");
// }

// 12. Write a JS code to print the Fibonacci series for a given value of N.

// 13. Write a JS code to find N value in the Fibonacci series for a given number.


// 14. Write a JS code to count all letters in a word 

// let letters = 'snehaJain';
// for(let a=0; a<letters.length; a++){
//     document.write(a);
// }

// 15. Write a JS code to find duplicate values in a given array

// 16. Using a for loop print all even numbers up to and including n.  

// let evenNumber = prompt("Enter a number");
// let num = evenNumber;

// for (let a = 1; a <= num; a++) {
//     if (a % 2 === 0) {
//         document.write(a + "<br>");
//     }
// }

// 17. Given a string change the every second letter to an uppercase ‘Z’. Assume.

// let inputString = "given a string";

// let modifiedString = "";
// for (let i = 0; i < inputString.length; i++) {
//     if (i % 2 === 1) { 
//         modifiedString += 'Z';
//     } else {
//         modifiedString += inputString[i];
//     }
// }
// document.write("Original String:", inputString);
// document.write("Modified String:", modifiedString);


// 18. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// let str = 'sneha';
// for(let a = 0; a<str.length; a++){
//     if(str[a] =='y' ){
//         document.write("yes, The string contains the letter y");
//         break;
//     }
//     else{
//         document.write("No, The string does not contains the letter y");
//         break;
//     }
// }

// 19. Given a number n Calculate the factorial of the number.
                              
// let n = 3;
// let factorial = 1;

// if (n < 0) {
//    document.write("Factorial is not defined for negative numbers");
// } else {
//     for (let i = 2; i <= n; i++) {
//         factorial *= i;
//     }
//    document.write(`The factorial of ${n} is: ${factorial}`);
// }

// 20. Display a Text Five Times.

// let text = "My name is Sneha Jain"
// for(let a=1; a<=5; a++){
//     document.write(text + "<br>")
// }

//   what is difference between it

// var arr2 = Array(1, 2, 3);  
// console.log(arr2);

// var arr4 = [1, 2, 3];  
// console.log(arr4);


// for (let a = 1; a<6; a++){
//     for(let b =5; b>a; b--){
//         document.write(" &nbsp; ","&nbsp");
        
//     }
//     for(let k =1; k<=((2*a)-1);k++){
//         if(a==1 || a==5 || k==1 || k==((2*a)-1)){
//             document.write("* ","&nbsp")
//         }
//         else{
//            document.write(" &nbsp; ","&nbsp"); 
//         }
        
//     }
//     document.write("<br>");
// }

// String question

// 1. Reverse words in a given string.

// let str = "Hello my name is sneha jain"
// let a = str.split().reverse();
// document.write(a)

// 2. Write a JavaScript program to calculate the length of a string. 

// let str = "Hello my name is sneha jain"
// let l = str.length;
// document.write(l)

// 3. Write a JavaScript program to count the number of characters (character frequency) in a string.


// var str = "hello my name is sneha jain";
// var charCount = {};

// for (var i = 0; i < str.length; i++) {
//     var char = str.charAt(i);

//     if (charCount[char]) {
//         charCount[char]++;
//     } 
//     else {
//         charCount[char] = 1;
//     }
// }

// for (var char in charCount) {
//     document.write("'" + char + "': " + charCount[char] + "<br>");
// }


// 4. Write a JavaScript program to get a string made of the first 2 and the last  2 chars from a given a  string.

// let nam = prompt("Enter");

// let l = nam.length ;
// document.write(nam[0] + nam[1]);
// for (let a = 0; a < l; a++) {
//     if (a >= l - 2) {
//         document.write(nam[a]);
//     }
    
// }

// 5. Write a JavaScript program to get a string from a given string where all occurrences of its first char   have been changed to '$', except the first char itself.

// let str = prompt("Enter a string");
// let firstChar = str[0];
// let modifiedString = firstChar;

// for (let i = 1; i < str.length; i++) {
//     if (str[i] === firstChar) {
//         modifiedString += '$';
//     } else {
//         modifiedString += str[i];
//     }
// }

// document.write(`Original string: ${str}<br>`);
// document.write(`Modified string: ${modifiedString}`);


// 6. Write a Javascript program to get a single string from two given strings, separated by a space and swap  the first two characters of each string.

// let str1 = "hello";
// let str2 = "world";

// let modifiedStr1 = str2.charAt(0) + str2.charAt(1) + str1.substring(2);
// let modifiedStr2 = str1.charAt(0) + str1.charAt(1) + str2.substring(2);

// let result = modifiedStr1 + " " + modifiedStr2;

// document.write("Original Strings:", str1, str2 +"<br>");

// document.write("Result:", result);


// 8.  Write a Javascript function that takes a list of words and returns the length of the longest one. 

// let wordList = ["apple", "banana", "Mango", "pyshcology", "elephant"];
// let longestWord = "";

// for (let a = 0; a < wordList.length; a++) {
//     if (wordList[a].length > longestWord.length) {
//         longestWord = wordList[a];
//     }
// }

// document.write("The longest word is: ", longestWord);

// 9. Write a JavaScipt program to remove the nth index character from a nonempty string.



// 10 Write a JavaScript program to change a given string to a new string where the first and last chars  have been exchanged.

// let word = "apple";
// let newWord = "";

// if (word.length >= 2) {
//     let firstChar = word[0];
//     let lastChar = word[word.length - 1];

//     newWord = lastChar + word.substring(1, word.length - 1) + firstChar;
// } else {
//     newWord = word;
// }

// document.write("Original word:", word +"<br>");
// document.write("New word:", newWord);


 


