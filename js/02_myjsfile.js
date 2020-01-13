/*
var name = prompt("please enter you name");
var lastName = prompt("please enter your last name ");
var age = prompt("please enter your age");

console.log("Your full name is " + name + " " + lastName);
console.log("You age is " + age);

var days = 365.25 * age;
console.log("You have lived for " + days + " days");

*/

/* While and if loops 
var secretNumber = 4;
var guess = Number(prompt("Guess a number"));

while (guess != secretNumber)
{
    if (guess < secretNumber)
    {
        alert("Number is too low.");
    }
    else 
    {
        alert("Number is too high. Guess again.");
    }
    guess = Number(prompt("Guess a number"));
}


alert("You have guessed it right!");

*/

// While Loops

var count = 1;
while ( count < 6)
{
    console.log("count is " + count);
    count++;
}


var str = "Hello";
var count = 0;
while (count < str.length)
{
    console.log(str[count]);
    count++
}

console.log("******************************************");

var num = 1;
while (num <=10)
{
    console.log(num);
    num +=2;
}

console.log("******************************************");

var n = 1
while (n <=20 ) 
{
    if (n%4 ===0)
    {
        console.log(n);
    }
    n++;
}

// This will cause infinte loop.
console.log("******************************************");

var s = "";
num = 100;
while (num < 150)
{
    //console.log(num+1); 
    s += (num+1) + " " ;
    //num--;
    num++;
}
console.log(s);
console.log("******************************************");
/// Excecise 1) Print all numbers between -10 and 19

var s = "";
var init = -19
while (init < 20)
{
    s += init + " ";
    //console.log(init);
    init++;
}

console.log(s);

console.log("******************************************");
/// Excecise 2) Print all numbers divisible by 5 and 3 between 5 and 50

var s = "";
var div = 5;

while (div < 51)
{
    if (div%5==0 && div%3==0)
    {
        s += div + " ";
    }
    div++;
}

console.log(s);

console.log("******************************************");

             [0123456]
var string = "Hello World"
console.log(string.indexOf("w"));          // -1
console.log(string.indexOf("World"));      // 6
console.log(string.indexOf("ll"));         // 2  

console.log("******************************************");

// For Loops 

for(var count = 1 ; count<6; count++)
{
    console.log(count);
}

var str = "hello World"
for (var len=0;len < str.length; len++)
{
    console.log(str[len]);
}

console.log("******************************************");

var s = "";
for (var div = 5; div <=50; div++)
{
    if (div%5==0 && div%3==0)
    {
        s += div + " ";
    }
}

console.log(s);

console.log("******************************************");