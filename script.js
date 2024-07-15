//1.Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
let i;
for(i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0){
        document.write("FizzBuzz");
    }
    else if(i%3==0 && i%5!=0)
    {
        document.write("Fizz","<br>");
    }
    else if(i%3!==0 && i%5==0)
    {
        document.write("Buzz","<br>");
    }
    else{
        document.write(i,"<br>");
    }
}





//2.Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

function palindrome(str){
    let res="";
    let j;
    for(j=str.length;j>=0;j--)
    {
        res+=str.charAt(j);
    }
    if(res==str){
        document.write("Palindrome");
    }
    else{
        document.write("Not a palindrome");
    }
}
palindrome("malayalam");





//3.Write a function that takes an array of numbers and returns the largest number.
function LargestNumber(arr){
    let max=arr[0];
    for(ind=0;ind<=arr.length;ind++)
    {
        if(arr[ind]>max)
        {
            max=arr[ind];
        }
    }
    document.write(max);
}
LargestNumber([45,65,70,90,20]);





//4.Write a function that takes a string and returns an object with each character as a key and its number of occurrences as the value.
 

    





//5.Write a function that takes a string and returns the longest word in the string.
function LongestWord(str1){
    let index;
    let count=0;
    // let word=" ";
    let max=0;
    for(index=0;index<str1.length;index++){
        if(str1.charAt(index)!=" ")
        {
            count++;
        }
        if(count>max){
            max=count;
        }
    }
    console.log(max);
}
LongestWord("I am learning Full Stack Development");





//6..Write a function that takes a number as input and returns its factorial.
function factorial(num){
    let fact;
    let result=1;
    for(fact=1;fact<=num;fact++){
        result*=fact;
    }
    document.write(result);
}
factorial(5);





//7.Write a function that converts a temperature from Celsius to Fahrenheit.
function CelsiustoF(temp){
    let F=(9/5)*temp+32;
    document.write(F);
}
CelsiustoF(32);






//8.Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.