document.body.style.backgroundColor="gray"
//container
var container=document.createElement("div");
container.setAttribute("class","container panelbody bg");
container.setAttribute("id","contain")
document.body.appendChild(container);
//heading
var cal=document.createElement("div");
cal.setAttribute("class","heading");
var icon=document.createElement("i");
var h2=document.createElement("h2");
h2.setAttribute("class","heading");
icon.setAttribute("class","fa fa-gavel")
icon.setAttribute("aria-hidden","true");
h2.innerHTML="Crack the code!Open the Safe"
cal.appendChild(h2);
h2.appendChild(icon);
container.appendChild(cal);

//<input type="text" id="inputData" class="inputCss form-control" />
var input1=document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("id","inputData");
input1.setAttribute("class","inputCss form-control");
container.appendChild(input1);

//<input type="text" id="" class="resultCss form-control" placeholder="result here" readonly />
var input2=document.createElement("input");
input2.setAttribute("type","text");
input2.setAttribute("id","result");
input2.setAttribute("class","resultCss form-control");
input2.setAttribute("placeholder","HINT:RED=>NOTPRESENT,ORANGE=>MISPLACED,YELLOW=>RIGHT");
input2.setAttribute("readonly","")
container.appendChild(input2);

//row1
var row1=document.createElement("div")
row1.setAttribute("class","rowPad");
row1.setAttribute("id","rowp")
document.getElementById("contain").appendChild(row1)

//output
var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result1");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("rowp").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result2");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("rowp").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result3");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("rowp").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result4");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("rowp").appendChild(res1);
//b1
var b1=document.createElement("button");
b1.setAttribute("class","btn btn-secondary");
b1.setAttribute("onclick","getData(1)");
b1.innerText="1";
document.getElementById("rowp").appendChild(b1)
//b2
var b2=document.createElement("button");
b2.setAttribute("class","btn btn-secondary");
b2.setAttribute("onclick","getData(2)");
b2.innerHTML="2";
document.getElementById("rowp").appendChild(b2)
//b3
var b3=document.createElement("button");
b3.setAttribute("class","btn btn-secondary");
b3.setAttribute("onclick","getData(3)");
b3.innerHTML="3";
document.getElementById("rowp").appendChild(b3)
//validate
var b5=document.createElement("button");
b5.setAttribute("class","btn btn-info");
b5.setAttribute("onclick","inputValidation()");
b5.innerHTML+="Validate";
document.getElementById("rowp").appendChild(b5)

//row2
var row2=document.createElement("div")
row2.setAttribute("class","rowPad");
row2.setAttribute("id","row2")
document.getElementById("contain").appendChild(row2)

//output
var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result5");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row2").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result6");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row2").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result7");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row2").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result8");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row2").appendChild(res1);
//b6
var b6=document.createElement("button");
b6.setAttribute("class","btn btn-secondary");
b6.setAttribute("onclick","getData(4)");
b6.innerText="4";
document.getElementById("row2").appendChild(b6)
//b7
var b2=document.createElement("button");
b2.setAttribute("class","btn btn-secondary");
b2.setAttribute("onclick","getData(5)");
b2.innerHTML="5";
document.getElementById("row2").appendChild(b2)
//b8
var b3=document.createElement("button");
b3.setAttribute("class","btn btn-secondary");
b3.setAttribute("onclick","getData(6)");
b3.innerHTML="6";
document.getElementById("row2").appendChild(b3)
//back
var b2=document.createElement("button");
b2.setAttribute("class","btn btn-info");
b2.setAttribute("onclick","getclear()");
b2.innerHTML="Back";
document.getElementById("row2").appendChild(b2);

//row3
var row3=document.createElement("div")
row3.setAttribute("class","rowPad");
row3.setAttribute("id","row3")
document.getElementById("contain").appendChild(row3)

//output
var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result9");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row3").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result10");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row3").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result11");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row3").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result12");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row3").appendChild(res1);
//b6
var b6=document.createElement("button");
b6.setAttribute("class","btn btn-secondary");
b6.setAttribute("onclick","getData(7)");
b6.innerText="7";
document.getElementById("row3").appendChild(b6)
//b7
var b2=document.createElement("button");
b2.setAttribute("class","btn btn-secondary");
b2.setAttribute("onclick","getData(8)");
b2.innerHTML="8";
document.getElementById("row3").appendChild(b2)
//b8
var b3=document.createElement("button");
b3.setAttribute("class","btn btn-secondary");
b3.setAttribute("onclick","getData(9)");
b3.innerHTML="9";
document.getElementById("row3").appendChild(b3)
//reset
var b11=document.createElement("button");
b11.setAttribute("class","btn btn-info");
b11.setAttribute("onclick","clearAll()");
b11.innerHTML="Exit";
document.getElementById("row3").appendChild(b11);

//row4
var row4=document.createElement("div")
row4.setAttribute("class","rowPad");
row4.setAttribute("id","row4")
document.getElementById("contain").appendChild(row4)

//output
var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result13");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row4").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result14");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row4").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result15");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row4").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result16");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row4").appendChild(res1);
//b6
var b6=document.createElement("button");
b6.setAttribute("class","btn btn-secondary");
b6.setAttribute("onclick","getData(0)");
b6.innerText="0";
document.getElementById("row4").appendChild(b6)
//play again
var b11=document.createElement("button");
b11.setAttribute("class","btn btn-info text-wrap");
b11.setAttribute("id","myBtn");
b11.setAttribute("onclick","getNextRandom()");
b11.innerHTML="Start";
document.getElementById("row4").appendChild(b11);




//row5

var row5=document.createElement("div")
row5.setAttribute("class","rowPad");
row5.setAttribute("id","row5")
document.getElementById("contain").appendChild(row5)

//output
var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result17");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row5").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result18");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row5").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result19");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row5").appendChild(res1);

var res1=document.createElement("input");
res1.setAttribute("type","text");
res1.setAttribute("id","result20");
res1.setAttribute("class","resultCss1");
res1.setAttribute("readonly","")
document.getElementById("row5").appendChild(res1);


/* //b2
var b2=document.createElement("button");
b2.setAttribute("class","btn btn-info");
b2.setAttribute("onclick","getclear()");
b2.innerHTML="Clear";
document.getElementById("row5").appendChild(b2)

//b3
var b11=document.createElement("button");
b11.setAttribute("class","btn btn-info");
b11.setAttribute("onclick","clearAll()");
b11.innerHTML="ClearAll";
document.getElementById("row5").appendChild(b11); */
 


//logic
//Getting Input
var exp=[];
function getData(data) {
    if(exp.length<4){
      exp.push(data);
    document.getElementById("inputData").value = exp.join("");   
    }
   else{
       alert("only 4 digit")
   }
}
//reset
function clearAll() {
    confirm("Are your sure to exit the Game??")
    exp =[];
    document.getElementById("inputData").value = "";
    document.getElementById("result").value = "";
    location.reload();
}
//back
function getclear(){
   exp.pop();
   document.getElementById("inputData").value = exp.join("");
   
}

//Random Number Generate
random=[];
for(var i = 0;i < 4; i++){
    random.push(Math.floor(Math.random() * (9 - 0) + 0));
  }
  function getNextRandom(){
   alert("Game Started All the Best!")
     // document.getElementById("result").value=res.join(""); 
  }
//check validity
count=0
function inputValidation() {
  if(exp.length!=0){
  //console.log(random);
  //console.log(exp);
   valid=[];
   invalid=[];
   if(exp.length!=4){
       alert("Enter 4 digit");
       exp =[];
    document.getElementById("inputData").value = "";
    document.getElementById("result").value = "";
   }else{
     count++;
     if(count>5){
        alert("No more lives you lost play AGain");
        location.reload();
          console.log(count)
     }
   }

  // comapring each element of array 
  if(count<=5){
     for(var i=0;i<exp.length;i++) 
   if(random[i]==exp[i]) {
    valid[i]=exp[i];
   }
   else{
       valid[i]="_"
       invalid[i]=exp[i];
   }
  /* console.log(valid)
  console.log(invalid) */
  //color code chance1
   for(i=0;i<random.length;i++){
     if(valid[i]!="_"){
       if(i==0 && count==1){
        document.getElementById("result1").style.color="white";
        document.getElementById("result1").style.backgroundColor="green";
        document.getElementById("result1").value = valid[i];
        //console.log(valid[i]);
       }else if(i==1 && count==1){
        document.getElementById("result2").style.color="white";
        document.getElementById("result2").style.backgroundColor="green";
        document.getElementById("result2").value = valid[i];
        //console.log(valid[i]);
       }else if(i==2 && count==1){
        document.getElementById("result3").style.color="white";
        document.getElementById("result3").style.backgroundColor="green";
        document.getElementById("result3").value = valid[i];
       }else if(i==3 && count==1){
        document.getElementById("result4").style.color="white";
        document.getElementById("result4").style.backgroundColor="green";
        document.getElementById("result4").value = valid[i];
       }
     }
     else{
      if(i==0 && count==1){
        document.getElementById("result1").style.color="white";
        document.getElementById("result1").style.backgroundColor="red";
        document.getElementById("result1").value = invalid[i];
        //console.log(valid[i]);
       }else if(i==1 && count==1){
        document.getElementById("result2").style.color="white";
        document.getElementById("result2").style.backgroundColor="red";
        document.getElementById("result2").value = invalid[i];
        //console.log(valid[i]);
       }else if(i==2 && count==1){
        document.getElementById("result3").style.color="white";
        document.getElementById("result3").style.backgroundColor="red";
        document.getElementById("result3").value = invalid[i];
       }else if(i==3 && count==1){
        document.getElementById("result4").style.color="white";
        document.getElementById("result4").style.backgroundColor="red";
        document.getElementById("result4").value = invalid[i];
       }

       //orange color
         if(invalid[i]!="_"){
         for(j=0;j<random.length;j++){
          if(invalid[i]==random[j]){
            if(i==0 && count==1){
              document.getElementById("result1").style.backgroundColor="orange";
             
             }else if(i==1 && count==1){
              
              document.getElementById("result2").style.backgroundColor="orange";
              
             }else if(i==2 && count==1){
              
              document.getElementById("result3").style.backgroundColor="orange";
              
             }else if(i==3 && count==1){
              
              document.getElementById("result4").style.backgroundColor="orange";
              
             }
          } 
        }
      }
    


     }
   }


   //color code chance2
   for(i=0;i<random.length;i++){
    if(valid[i]!="_"){
      if(i==0 && count==2){
       document.getElementById("result5").style.color="white";
       document.getElementById("result5").style.backgroundColor="green";
       document.getElementById("result5").value = valid[i];
       //console.log(valid[i]);
      }else if(i==1 && count==2){
       document.getElementById("result6").style.color="white";
       document.getElementById("result6").style.backgroundColor="green";
       document.getElementById("result6").value = valid[i];
       //console.log(valid[i]);
      }else if(i==2 && count==2){
       document.getElementById("result7").style.color="white";
       document.getElementById("result7").style.backgroundColor="green";
       document.getElementById("result7").value = valid[i];
      }else if(i==3 && count==2){
       document.getElementById("result8").style.color="white";
       document.getElementById("result8").style.backgroundColor="green";
       document.getElementById("result8").value = valid[i];
      }
    }
    else{
     if(i==0 && count==2){
       document.getElementById("result5").style.color="white";
       document.getElementById("result5").style.backgroundColor="red";
       document.getElementById("result5").value = invalid[i];
       //console.log(valid[i]);
      }else if(i==1 && count==2){
       document.getElementById("result6").style.color="white";
       document.getElementById("result6").style.backgroundColor="red";
       document.getElementById("result6").value = invalid[i];
       //console.log(valid[i]);
      }else if(i==2 && count==2){
       document.getElementById("result7").style.color="white";
       document.getElementById("result7").style.backgroundColor="red";
       document.getElementById("result7").value = invalid[i];
      }else if(i==3 && count==2){
       document.getElementById("result8").style.color="white";
       document.getElementById("result8").style.backgroundColor="red";
       document.getElementById("result8").value = invalid[i];
      }
    }

  //orange color
  if(invalid[i]!="_"){
    for(j=0;j<random.length;j++){
     if(invalid[i]==random[j]){
       if(i==0 && count==2){
         document.getElementById("result5").style.backgroundColor="orange";
        
        }else if(i==1 && count==2){
         
         document.getElementById("result6").style.backgroundColor="orange";
         
        }else if(i==2 && count==2){
         
         document.getElementById("result7").style.backgroundColor="orange";
         
        }else if(i==3 && count==2){
         
         document.getElementById("result8").style.backgroundColor="orange";
         
        }
     } 
   }
 }

  }

  //color code chance3
  for(i=0;i<random.length;i++){
    if(valid[i]!="_"){
      if(i==0 && count==3){
       document.getElementById("result9").style.color="white";
       document.getElementById("result9").style.backgroundColor="green";
       document.getElementById("result9").value = valid[i];
       //console.log(valid[i]);
      }else if(i==1 && count==3){
       document.getElementById("result10").style.color="white";
       document.getElementById("result10").style.backgroundColor="green";
       document.getElementById("result10").value = valid[i];
       //console.log(valid[i]);
      }else if(i==2 && count==3){
       document.getElementById("result11").style.color="white";
       document.getElementById("result11").style.backgroundColor="green";
       document.getElementById("result11").value = valid[i];
      }else if(i==3 && count==3){
       document.getElementById("result12").style.color="white";
       document.getElementById("result12").style.backgroundColor="green";
       document.getElementById("result12").value = valid[i];
      }
    }
    else{
     if(i==0 && count==3){
       document.getElementById("result9").style.color="white";
       document.getElementById("result9").style.backgroundColor="red";
       document.getElementById("result9").value = invalid[i];
       //console.log(valid[i]);
      }else if(i==1 && count==3){
       document.getElementById("result10").style.color="white";
       document.getElementById("result10").style.backgroundColor="red";
       document.getElementById("result10").value = invalid[i];
       //console.log(valid[i]);
      }else if(i==2 && count==3){
       document.getElementById("result11").style.color="white";
       document.getElementById("result11").style.backgroundColor="red";
       document.getElementById("result11").value = invalid[i];
      }else if(i==3 && count==3){
       document.getElementById("result12").style.color="white";
       document.getElementById("result12").style.backgroundColor="red";
       document.getElementById("result12").value = invalid[i];
      }
    }
 //orange color
 if(invalid[i]!="_"){
  for(j=0;j<random.length;j++){
   if(invalid[i]==random[j]){
     if(i==0 && count==3){
       document.getElementById("result9").style.backgroundColor="orange";
      
      }else if(i==1 && count==3){
       
       document.getElementById("result10").style.backgroundColor="orange";
       
      }else if(i==2 && count==3){
       
       document.getElementById("result11").style.backgroundColor="orange";
       
      }else if(i==3 && count==3){
       
       document.getElementById("result12").style.backgroundColor="orange";
       
      }
   } 
 }
}

  }
   //color code chance4
   for(i=0;i<random.length;i++){
    if(valid[i]!="_"){
      if(i==0 && count==4){
       document.getElementById("result13").style.color="white";
       document.getElementById("result13").style.backgroundColor="green";
       document.getElementById("result13").value = valid[i];
       //console.log(valid[i]);
      }else if(i==1 && count==4){
       document.getElementById("result14").style.color="white";
       document.getElementById("result14").style.backgroundColor="green";
       document.getElementById("result14").value = valid[i];
       //console.log(valid[i]);
      }else if(i==2 && count==4){
       document.getElementById("result15").style.color="white";
       document.getElementById("result15").style.backgroundColor="green";
       document.getElementById("result15").value = valid[i];
      }else if(i==3 && count==4){
       document.getElementById("result16").style.color="white";
       document.getElementById("result16").style.backgroundColor="green";
       document.getElementById("result16").value = valid[i];
      }
    }
    else{
     if(i==0 && count==4){
       document.getElementById("result13").style.color="white";
       document.getElementById("result13").style.backgroundColor="red";
       document.getElementById("result13").value = invalid[i];
       //console.log(valid[i]);
      }else if(i==1 && count==4){
       document.getElementById("result14").style.color="white";
       document.getElementById("result14").style.backgroundColor="red";
       document.getElementById("result14").value = invalid[i];
       //console.log(valid[i]);
      }else if(i==2 && count==4){
       document.getElementById("result15").style.color="white";
       document.getElementById("result15").style.backgroundColor="red";
       document.getElementById("result15").value = invalid[i];
      }else if(i==3 && count==4){
       document.getElementById("result16").style.color="white";
       document.getElementById("result16").style.backgroundColor="red";
       document.getElementById("result16").value = invalid[i];
      }
    }


    //orange color
 if(invalid[i]!="_"){
  for(j=0;j<random.length;j++){
   if(invalid[i]==random[j]){
     if(i==0 && count==4){
       document.getElementById("result13").style.backgroundColor="orange";
      
      }else if(i==1 && count==4){
       
       document.getElementById("result14").style.backgroundColor="orange";
       
      }else if(i==2 && count==4){
       
       document.getElementById("result15").style.backgroundColor="orange";
       
      }else if(i==3 && count==4){
       
       document.getElementById("result16").style.backgroundColor="orange";
       
      }
   } 
 }
}

  }
   //color code chance5
   for(i=0;i<random.length;i++){
    if(valid[i]!="_"){
      if(i==0 && count==5){
       document.getElementById("result17").style.color="white";
       document.getElementById("result17").style.backgroundColor="green";
       document.getElementById("result17").value = valid[i];
       //console.log(valid[i]);
      }else if(i==1 && count==5){
       document.getElementById("result18").style.color="white";
       document.getElementById("result18").style.backgroundColor="green";
       document.getElementById("result18").value = valid[i];
       //console.log(valid[i]);
      }else if(i==2 && count==5){
       document.getElementById("result19").style.color="white";
       document.getElementById("result19").style.backgroundColor="green";
       document.getElementById("result19").value = valid[i];
      }else if(i==3 && count==5){
       document.getElementById("result20").style.color="white";
       document.getElementById("result20").style.backgroundColor="green";
       document.getElementById("result20").value = valid[i];
      }
    }
    else{
     if(i==0 && count==5){
       document.getElementById("result17").style.color="white";
       document.getElementById("result17").style.backgroundColor="red";
       document.getElementById("result17").value = invalid[i];
       //console.log(valid[i]);
      }else if(i==1 && count==5){
       document.getElementById("result18").style.color="white";
       document.getElementById("result18").style.backgroundColor="red";
       document.getElementById("result18").value = invalid[i];
       //console.log(valid[i]);
      }else if(i==2 && count==5){
       document.getElementById("result19").style.color="white";
       document.getElementById("result19").style.backgroundColor="red";
       document.getElementById("result19").value = invalid[i];
      }else if(i==3 && count==5){
       document.getElementById("result20").style.color="white";
       document.getElementById("result20").style.backgroundColor="red";
       document.getElementById("result20").value = invalid[i];
      }
    }
    //orange color
    if(invalid[i]!="_"){
      for(j=0;j<random.length;j++){
       if(invalid[i]==random[j]){
         if(i==0 && count==5){
           document.getElementById("result17").style.backgroundColor="orange";
          
          }else if(i==1 && count==5){
           
           document.getElementById("result18").style.backgroundColor="orange";
           
          }else if(i==2 && count==5){
           
           document.getElementById("result19").style.backgroundColor="orange";
           
          }else if(i==3 && count==5){
           
           document.getElementById("result20").style.backgroundColor="orange";
           
          }
       } 
     }
    }

  }
    //reset input after check
    exp =[];
    document.getElementById("inputData").value = "";

    //document.getElementById("result").value = "";
  //score update
  if(JSON.stringify(random)==JSON.stringify(valid)){
    if(count==1){
      alert("Congrats You won.your Point is 1000/1000");
      location.reload();
    }else if(count==2){
      alert("Congrats You won.your Point is 800/1000");
      location.reload();
    }else if(count==3){
      alert("Congrats You won.your Point is 600/1000");
      location.reload();
    }else if(count==4){
      alert("Congrats You won.your Point is 400/1000");
      location.reload();
    }else if(count==5){
      alert("Congrats You won.your Point is 200/1000");
      location.reload();
    }
  }else{
    if(count==1){
      alert("chance 1 over");
    }else if(count==2){
      alert("chance 2 over");
    }else if(count==3){
      alert("chance 3 over");
    }else if(count==4){
      alert("last chance to try");
    }else if(count>=5){
      alert("you lost..Restart the Game");
      location.reload();
    }
  }
  }
  }else{
    alert("Please Enter number")
  }
  
}
