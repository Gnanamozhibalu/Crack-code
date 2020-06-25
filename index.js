
document.body.style.backgroundColor="gray"
//container
var container=document.createElement("div");
container.setAttribute("class","container panelbody bg");
container.setAttribute("id","contain")
document.body.appendChild(container);
//<div><h2 class="heading"><i class="fa fa-calculator" aria-hidden="true"></i>Calculator</h2></div>
var cal=document.createElement("div");
cal.setAttribute("class","heading");
var icon=document.createElement("i");
var h2=document.createElement("h2");
h2.setAttribute("class","heading");
icon.setAttribute("class","fa fa-gavel")
icon.setAttribute("aria-hidden","true");
h2.innerHTML="Crack code!"
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
input2.setAttribute("placeholder","result here");
input2.setAttribute("readonly","")
container.appendChild(input2);

/* <div class="rowPad">
<button class="btn btn-primary" onclick="getData('1')" onclick="getData('')" onclick="getData('')">1</button>
<button class="btn btn-primary" onclick="getData('2')">2</button>
<button class="btn btn-primary" onclick="getData('3')">3</button>
<button class="btn btn-primary" onclick="getData('+')">+</button>
<button class="btn btn-primary" onclick="getData('(')">(</button>
</div> */

//row1
var row1=document.createElement("div")
row1.setAttribute("class","rowPad");
row1.setAttribute("id","rowp")
document.getElementById("contain").appendChild(row1)

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
/* //b4
var b4=document.createElement("button");
b4.setAttribute("class","btn btn-secondary");
b4.setAttribute("onclick","getData('+')");
b4.innerHTML="+";
document.getElementById("rowp").appendChild(b4) */
//b5
/* var b5=document.createElement("button");
b5.setAttribute("class","btn btn-secondary");
b5.setAttribute("onclick","getData('(')");
b5.innerHTML="&nbsp(";
document.getElementById("rowp").appendChild(b5) */

/* <div class="rowPad">
            <button class="btn btn-primary" onclick="getData('4')">4</button>
            <button class="btn btn-primary" onclick="getData('5')">5</button>
            <button class="btn btn-primary" onclick="getData('6')">6</button>
            <button class="btn btn-primary" onclick="getData('-')">-</button>
            <button class="btn btn-primary" onclick="getData(')')">)</button>
</div> */
//row2
var row2=document.createElement("div")
row2.setAttribute("class","rowPad");
row2.setAttribute("id","row2")
document.getElementById("contain").appendChild(row2)

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
document.getElementById("row2").appendChild(b2)
/* //b9
var b4=document.createElement("button");
b4.setAttribute("class","btn btn-secondary");
b4.setAttribute("onclick","getData('-')");
b4.innerHTML="&nbsp-";
document.getElementById("row2").appendChild(b4)
//b10
var b5=document.createElement("button");
b5.setAttribute("class","btn btn-secondary");
b5.setAttribute("onclick","getData(')')");
b5.innerHTML="&nbsp)";
document.getElementById("row2").appendChild(b5) */


/* <div class="rowPad">
<button class="btn btn-primary" onclick="getData('7')">7</button>
<button class="btn btn-primary" onclick="getData('8')">8</button>
<button class="btn btn-primary" onclick="getData('9')">9</button>
<button class="btn btn-primary" onclick="getData('*')">*</button>
<button class="btn btn-primary" onclick="getData('%')">%</button>
</div> */

//row3
var row3=document.createElement("div")
row3.setAttribute("class","rowPad");
row3.setAttribute("id","row3")
document.getElementById("contain").appendChild(row3)

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
b11.innerHTML="Reset";
document.getElementById("row3").appendChild(b11);
/* //b9
var b4=document.createElement("button");
b4.setAttribute("class","btn btn-secondary");
b4.setAttribute("onclick","getData('*')");
b4.innerHTML="*";
document.getElementById("row3").appendChild(b4)
//b10
var b5=document.createElement("button");
b5.setAttribute("class","btn btn-secondary");
b5.setAttribute("onclick","getData('%')");
b5.innerHTML="%";
document.getElementById("row3").appendChild(b5)
 */
//row4
{/* <div class="rowPad">
            <button class="btn btn-primary" onclick="getData('0')">0</button>
            <button class="btn btn-primary" onclick="getData('/')">/</button>
            <button class="btn btn-primary" onclick="getData('**')">^</button>
</div> */}

var row4=document.createElement("div")
row4.setAttribute("class","rowPad");
row4.setAttribute("id","row4")
document.getElementById("contain").appendChild(row4)

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
b11.innerHTML="Play";
document.getElementById("row4").appendChild(b11);
/* //b7
var b2=document.createElement("button");
b2.setAttribute("class","btn btn-secondary");
b2.setAttribute("onclick","getData('/')");
b2.innerHTML="/";
document.getElementById("row4").appendChild(b2)
//b8
var b3=document.createElement("button");
b3.setAttribute("class","btn btn-secondary");
b3.setAttribute("onclick","getData('**')");
b3.innerHTML="^";
document.getElementById("row4").appendChild(b3) */

/* //b4
var b4=document.createElement("button");
b4.setAttribute("class","btn btn-secondary");
b4.setAttribute("onclick","getData('.')");
b4.innerHTML=".";
document.getElementById("row4").appendChild(b4)
//b5
var b5=document.createElement("button");
b5.setAttribute("class","btn btn-secondary");
b5.setAttribute("onclick","inputValidation()");
b5.innerHTML+="=";
document.getElementById("row4").appendChild(b5) */

{/* <div class="rowPad">
<button tyepe="submit" class="btn btn-info" onclick="inputValidation()">result</button>
<button class="btn btn-info" onclick="clearAll()">clear all</button>
</div> */}
/* //row5
var row5=document.createElement("div")
row5.setAttribute("class","rowPad");
row5.setAttribute("id","row5")
document.getElementById("contain").appendChild(row5)
//b2
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
document.getElementById("row5").appendChild(b11);
 */


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
    exp =[];
    document.getElementById("inputData").value = "";
    document.getElementById("result").value = "";
}
//back
function getclear(){
   exp.pop();
   document.getElementById("inputData").value = exp.join("");
}

//Random Number Generate
  function getNextRandom(){
    random=[];
    for(var i = 0;i < 4; i++){
        random.push(Math.floor(Math.random() * (9 - 0) + 0));
      }
     // document.getElementById("result").value=res.join(""); 
  }
//check validity
function inputValidation() {
   console.log(random);
   console.log(exp);
   valid=[]
   if(exp.length!=4){
       alert("Enter 4 digit");
       exp =[];
    document.getElementById("inputData").value = "";
    document.getElementById("result").value = "";
   }else{
     
   }

  // comapring each element of array 
   for(var i=0;i<exp.length;i++) 
   if(random[i]==exp[i]) {
    valid[i]=exp[i];
   }
   else{
       valid[i]="_"
   }
   console.log(valid)
   document.getElementById("result").style.color="#79d70f";
   /* document.getElementById("result").style.backgroundColor="green" */
    document.getElementById("result").value = valid.join(" ");
    //document.getElementById("inputData").value = exp.join(" "); 
    exp =[];
    document.getElementById("inputData").value = "";
    //document.getElementById("result").value = "";
    if(JSON.stringify(random)==JSON.stringify(valid)){
        alert("Congrats You won.your Point is `${point}`")
    }


}
