var city = prompt("Enter the city : ");
if(city==="Karachi")
{
    alert("Welcome to citys of lights.")
}
else{
    alert("Welcome to " + city)
}

var gender = prompt("Enter your gender ");
if(gender==="Male"){
     alert(" Good Morning Sir.")
}
else if(gender === "Female"){
    alert("Good Morning Ma’am.")
}
else{
    alert("Sorry You enter wrong gender")
}


var signal = prompt("Enter Traffic Signal Color :")
if(signal==="Red")
{
    alert("Must Stop.")
}
else if(signal==="Yellow")
{
    alert("Ready to move")
}
else if(signal==="Green")
{
    alert("Move on")
}
else{
    alert("You enter wrong color..")
}


var fuel = +prompt("Enter remaining fuel in car (in liters)");

if(fuel === 0.25)
{
    alert("Please refill the fuel in your car.")
}
else{
    alert("Fuel is enough.")
}


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is true");
}

if(c === 14){
alert("condition 4 is true");
}

 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}

if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
    }

  
    
    var obt1 = +prompt("Enter Obtained Marks of First Subject: ")
    var obt2 = +prompt("Enter Obtained Marks of Second Subject: ")
    var obt3 = +prompt("Enter Obtained Marks of Third Subject: ")
    var totalmarks = 100;
    var total = totalmarks*3;
    var total_obt = obt1 + obt2 + obt3;
    var total_per = Math.round(( total_obt / total) *100);
    
    if(total_per>=100 || total_per>=80)
    {
        document.write("<h1>Mark Sheet</h1>" + "<br>")
        document.write("Total Marks " + total+ "<br>")
        document.write("Mark Obtained " + total_obt+"<br>")
        document.write("Percentage " + total_per + "<br>")
        document.write("Grade " + "A-one" +"<br>")
        document.write("Remarks : Execllent " + "<br>")
    }

    else if(total_per>=70)
    {
        document.write("<h1>Mark Sheet</h1>" + "<br>")
        document.write("Total Marks " + total+ "<br>")
        document.write("Mark Obtained " + total_obt+"<br>")
        document.write("Percentage " + total_per + "<br>")
        document.write("Grade " + "A" +"<br>")
        document.write("Remarks : Good " + "<br>")
    }

    else if(total_per>=60)
    {
        document.write("<h1>Mark Sheet</h1>" + "<br>")
        document.write("Total Marks " + total+ "<br>")
        document.write("Mark Obtained " + total_obt+"<br>")
        document.write("Percentage " + total_per + "<br>")
        document.write("Grade " + "B" +"<br>")
        document.write("Remarks : You need to improve " + "<br>")
    }

    else if(total_per<60)
    {
        document.write("<h1>Mark Sheet</h1>" + "<br>")
        document.write("Total Marks " + total+ "<br>")
        document.write("Mark Obtained " + total_obt+"<br>")
        document.write("Percentage " + total_per + "<br>")
        document.write("Grade " + "Fail" +"<br>")
        document.write("Remarks : Sorry " + "<br>")
    }

     var  ran = Math.floor(Math.random()*11);
    var random = +prompt("Enter Sceret Number (0 to 10) : ")
    if(ran === random)
    {
        document.write(" “Bingo! Correct answer”")
    }
    else if(ran === random+1)
    {
        document.write("“Close enough to the correct answer.")
    }


    var num = +prompt("Enter the Number : ");
    num = num % 3;
    if(num == 0)
    {
        document.write("Number is divisible by 3.")
    }
    else
    {
        document.write("Number is not  divisible by 3.")
    }


    
    var num = +prompt("Enter the Number : ");
    num = num % 2;
    if(num == 0)
    {
        document.write("This is Even Number.")
    }
    else
    {
        document.write("This is Odd Number.")
    }

    var temp = +prompt("Enter the Temperature :");

    if(temp > 40)
    {
         document.write("“It is too hot outside.”")
    }
    else if(temp > 30)
    {
            document.write("“The Weather today is Normal.”")
    }
    else if(temp > 20)
    {
            document.write(" “Today’s Weather is cool.”")
    }

    else if(temp > 10)
    {
            document.write(" “OMG! Today’s weather is so Cool.”")
    }
    else{
        document.write("Invalid Input!")
    }

    var first_num = +prompt("Enter the First Number:");
    var second_num = +prompt("Enter the Second Number:");
    var opr = prompt("Enter the Operator :");
    if(opr == "+")
    {
        document.write(first_num + " + " + second_num + " = " + Math.floor(first_num+second_num))
    }
    else if(opr == "-")
    {
        document.write(first_num + " - " + second_num + " = " + Math.floor(first_num-second_num))
    }
    else if(opr == "*")
    {
        document.write(first_num + " * " + second_num + " = " + Math.floor(first_num*second_num))
    }
    else if(opr == "/")
    {
        document.write(first_num + " / " + second_num + " = " + Math.floor(first_num/second_num))
    }
    else if(opr == "%")
    {
        document.write(first_num + " % " + second_num + " = " + Math.floor(first_num%second_num))
    }
    else{
        document.write("Invalid Input!")
    }