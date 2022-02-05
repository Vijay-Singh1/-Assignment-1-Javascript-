console.clear();

// // Question 1:
// // var str1 = 'Today is';
// // var str2 = '      a beautiful day     '
// // var str3 = ' In Hawaii.     '
// // Result = 'Today is a beautiful day In Hawaii.'
// // Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
var str4 = str1 + ' ' + str2.trim() + ' ' + str3.trim();
console.log(str4)




console.log("Q1 END =====================")

// // // Question 2:
// // // var enteredAlphabet = 'd' or "D"
// // // Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.
// //
var enteredAlphabet = 'd'; 

if(typeof(enteredAlphabet)=='string'){}

switch(true){
    
    
  case (enteredAlphabet=='a'|| enteredAlphabet=='A' ):
   console.log(enteredAlphabet + ' is a vowel');
    break
    
    case (enteredAlphabet=='e' || enteredAlphabet=='E'):
   console.log(enteredAlphabet + ' is a vowel');
    break
    
    case (enteredAlphabet=='i' || enteredAlphabet=='I'):
   console.log(enteredAlphabet + ' is a vowel');
    break

    case (enteredAlphabet=='o' || enteredAlphabet=='O'):
   console.log(enteredAlphabet + ' is a vowel');
    break
    
    
    case (enteredAlphabet=='u' || enteredAlphabet=='U'):
   console.log(enteredAlphabet + ' is a vowel');
    break
    
  default:
    console.log(enteredAlphabet + ' is a consonant or non-alphabet');
    
} 


console.log("Q2 END =====================");


// // Question 3:
// // Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.



var enterFirstNumber = 10;
    var enterSecondNumber = 5;
var enterOperater = '/';

if(typeof(enterFirstNumber&&enterSecondNumber)=='number'){


switch(true){
  case (enterOperater == '+' ):
    var sum = enterFirstNumber + enterSecondNumber;
    console.log(sum);
    break
    
    
    case (enterOperater == '-'):
    var sub = enterFirstNumber - enterSecondNumber;
    console.log(sub);
    break
    
    case (enterOperater == '*'):
    var product = enterFirstNumber * enterSecondNumber;
    console.log(product);
    
    break
    
    case (enterOperater == '/'):
    var divide = enterFirstNumber / enterSecondNumber;
    console.log(divide);
    break
 
}
    
}

else{
  console.log('please enter a digit only')
}
 




console.log("Q3 END =====================")


// // Question 4:
// // Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// // Properties of triangle:
// // A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// // A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// // A triangle is said Scalene Triangle, if none of its sides are equal.

var a = 10;
var b =60;
var c = 60;

if(a==0 || b==0 || c==0){
  console.log('please Enter a greater than zero')
}

else if(a==b && a==c){
  console.log('Given triangle is Equilateral')
}
else if(a==b || b==c || a==c ){
  console.log('Given triangle is Isosceles')
  
}

else if(a!=b && b!=c){
  console.log('Given triangle is Scalene')
  }
  

  

console.log("Q4 END =====================")


// // Question 5:
// // Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// // For first 50 units Rs. 0.50/unit
// // For next 100 units Rs. 0.75/unit
// // For next 100 units Rs. 1.20/unit
// // For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// // For example, input: 20 units then bill is Rs10
// // Total Units: 300
// // 50 * 0.5 = 25
// // 100 * 0.75 = 75
// // 100 * 1.2 = 120
// // 50 * 1.5 = 75
// // Total = 295 + 20% surcharge on 295
// // Result = INR 354

var units = 300;
var amount;

if(units<=50){
   var amount=units*0.50;
    console.log("INR" + " "+amount);
}


else if(units>50 && units<=150){
   amount=((units-50)*0.75) + 25;
    console.log("INR" + " "+amount);
}

else if(units>150 && units<=250){
   amount=((units-150)*1.2) +25 +75;
    console.log("INR" + " "+amount);
}

else if(units>250 ){

    amount=((units-250)*1.5) +25 + 75 + 120;
    amount = (amount + amount*0.2);
     console.log("INR" + " "+amount);
    }




console.log("Q5 END =====================")


