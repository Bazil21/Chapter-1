var c  = prompt("Enter Only One Character : ")
if (c >= 'a' && c <= 'z'){
        document.write(c + " is a Lowercase Letter");
}
    else if(c >= 'A' && c <= 'Z')
    {
        document.write(c + " is a Uppercase Letter");
    }

    else if(c >= 0 && c <= 100)
    {
        document.write(c + " is a Number.");
    }


var a = +prompt("Enter First Integer : ");
var b = +prompt("Enter Second Integer : ");
if (a>b){
    document.write(a + " is Larger to  " + b);
}
else if (a<b){
    document.write(b + " is larger then " + a);
}
else if (a===b){
    document.write(a + " is Equal to  " + b);
}


var num = +prompt("Enter the Number : ");
if(num>0)
{
    document.write(num +"  It is a Positive Integer.")
}
else if(num<0)
{
    document.write(num +"  It is a Negative Integer.")
}
else if(num===0)
{
    document.write(num +"  It is a Zero.")
}


var vowel = prompt("Enter only one character");
if(vowel=='a' || vowel=='A')
{
    document.write(vowel + " is a vowel.")
}
else if(vowel=='e' || vowel=='E')
{
    document.write(vowel + " is a vowel.")
}
else if(vowel=='i' || vowel=='I')
{
    document.write(vowel + " is a vowel.")
}
else if(vowel=='o' || vowel=='O')
{
    document.write(vowel + " is a vowel.")
}
else if(vowel=='u' || vowel=='U')
{
    document.write(vowel + " is a vowel.")
}
else
{
    document.write(vowel + " is not a vowel.")
}

var Password = "bazilfarooq123"
var pass = prompt("Enter Your Password")
if(pass===Password)
{
    document.write("“Correct! The password you  entered matches the original password”")
}
else if(pass===""){
    document.write("Please! Enter the Password.")
}
else if(pass!==Password)
{
    document.write("You Enter Incorrect Password.")
}


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}

var time = +prompt("Enter the time : ");
if(time>=0000 && time<1200)
{
    alert("Good Morning!")
}
else if(time>=1200 && time<1700)
{
    alert("Good Afternoon!")
}
else if(time>=1700 && time<2100)
{
    alert("Good Evening!")
}
else if(time>=2100 && time<2359)
{
    alert("Good Night!")
}