//Use of If-Else:
var a = 3;
var b = 5;
if (a<b){
    console.log("Right");
}
else if(a>b){
    console.log("wrong");
}
else{
    console.log("They both are same");
}



//Use of Switch Case:
var sum = 10;
switch(sum){
    case 1:
        console.log("Got it at 1");
        break;
    case 6:
        console.log("Got it at 6");
        break;
    case 10:
        console.log("Got it at 10");
        break;
    default:
        console.log("I don't find it");
}

 


//Use of Time & Date:
  var myDate = new Date();
  console.log(myDate.toTimeString());
  console.log(myDate.toLocaleTimeString());
  console.log(myDate.getDate());
  console.log(myDate.toDateString());
  console.log(myDate.getSeconds());




//Use of Push & Pop:
  var team = ["player 1","player 2","player 3"];
  team [1] = "p9";
  team.push("p4"); 
  team.pop();
  console.log(team); 
   




//Use of Shift & Unshift:
var team = ["player 1","player 2","player 3"];
team.shift();
team.unshift("Arnob");
console.log(team);



//Use of Slice:
var team = ["player 1","player 2","player 3","player 4"];
console.log(team.slice(0,3));




//Use of Splice:
var team = ["player 1","player 2","player 3","player 4"];
team.splice(0,2,"Arnob");
console.log(team);





//Use of for loop:
 for(var num=1; num<=20; num++ ){
 console.log(num);
 }




 //Use of while loop:
 var i=0;
 while(i<10){
 console.log(i);
 i++;
 } 





//How to create a function:
 function P(num1, num2){
     console.log(num1*num2);
 }
 P(23, 45);
 P(34, 32);








 //How to declear Object:
var MyInfo= {YourName: "Arnob", Roll:578031, Department:"Computer Science and Technology"}
console.log(MyInfo);
console.log(MyInfo.Department);







//Constructor: Function and object use...
function MyInfo(YourName, Village, PhoneNo){
    this.YourName = YourName;
    this.Village = Village;
    this.PhoneNo = PhoneNo;
    this.ShowMe = function(){
        console.log(this.YourName);
        console.log(this.Village);
        console.log(this.PhoneNo);
    }
}
var Student01 = new MyInfo("Arnob","ShahjiBazar", 3245 );
var Student02 = new MyInfo("Jeck","Sydney", 5843 );

Student01.ShowMe();
Student02.ShowMe();







//Use of Ternary Operator.
var num = 12;
var MyCondition = (num<10)? "You are smaller than me": "You are bigger than me";
console.log(MyCondition);







//What is global scope & local scope:
var Name = "Arnob";
console.log(Name);
function me(){
    console.log(Name);
}
me();

//but if you declear a var in a function then it called local scope.
var Name = "Arnob";
console.log(Name);
function me(){
    var num = 12;    
    console.log(num); //you can't declear it out of the function;
}
me();







//How to declear function expression:
var Expression = function CallMe(){
  console.log("Hello");
}

Expression();


 













  
