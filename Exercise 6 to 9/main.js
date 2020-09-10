var a = 10;
document.write("Result:"+"<br>" + "The value of a : "+a+"<br>"+"<br>"+"............................."+"<br>"+"<br>")
++a;
document.write("The value of ++a is : " + a+"<br>")
document.write("The value of ++a is : " + a+"<br>"+"<br>"+"<br>")
document.write("The value of a++ is : " + a +"<br>")
a++;
document.write("Now the value of a++ is : " + a +"<br>"+"<br>")
--a;
document.write("The value of --a is : " + a +"<br>")
document.write("Now the value of --a is : " + a+"<br>"+"<br>"+"<br>")
document.write("The value of a-- is : " + a-- +"<br>")
document.write("Now the value of a-- is : " + a +"<br>"+"<br>"+"<br>")

var x = 2;
var y = 1;
document.write("x is : " + x +"<br>")
document.write("y is : " + y +"<br>"+"<br>")
var result = --x - --y + ++y + y--;

document.write("Result is : " + result +"<br>"+"<br>")
 var name = prompt("Enter Your Name!")
 document.write("Welcome " + name + " Nice to Meet you Take Care."+ "<br><br>")

document.write("''''''Multiplication Table'''''"+"<br>"+ "If user don't enter any number its show defualt table of 5."+"<br>"+"<br>")
var num = prompt("Enter Number :")
var num = parseInt(num) || 5;
for(var i=1; i<=10;i++)
{
    document.write(num + "   *    " + i  + "   =   " + i*num + "<br>")
}

var sub1 = prompt("Enter First Subject : ")
var sub2 = prompt("Enter Second Subject : ")
var sub3 = prompt("Enter Third Subject : ")
var totalmarks = 100;
var obt1 = prompt("Enter Obtained Marks of First Subject: ")
var obt2 = prompt("Enter Obtained Marks of Second Subject: ")
var obt3 = prompt("Enter Obtained Marks of Third Subject: ")
var obt1 = parseInt(obt1)
var obt2 = parseInt(obt2)
var obt3 = parseInt(obt3)
var total = totalmarks*3;
var persub1 = (obt1 / totalmarks)*100;
 var persub2 = (obt2 / totalmarks)*100;
var persub3 = (obt3 / totalmarks)*100;
var total_obt = obt1 + obt2 + obt3;
var total_per = ( total_obt / total) *100;
document.write("<h3>Subjects     Total Marks    Obtained Marks      Percentage</h3>" + "<br>")
document.write(sub1 +".............."+ totalmarks + "..................."+obt1 +"........................." + Math.round(persub1)+"%"+ "<br>"+sub2 +".............."+ totalmarks + "..................."+obt2 +"........................." +Math.round(persub2)+"%"+"<br>"+sub3 +".............."+ totalmarks + "..................."+obt3 +"........................." +Math.round(persub3)+"%"+"<br>")
document.write("...............Total Result................<br>")
document.write("..................." + total+"................"+total_obt+"......................."+Math.round( total_per) + "%")
