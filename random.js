//random number generate
document.getElementById("myBtn").addEventListener("click", function(){
    var numberArray = [1,2,3,4,5,6,7,8,9,0];
    
        // randomize order of elements with a sort function that randomly returns -1/0/1
        numberArray.sort(function(){ return Math.floor(Math.random() * 3) - 1; })
        var count=1;
        function getNextRandom(){
           count+=1;
           console.log(count)
           // document.getElementById("count").innerHTML=count;
            return numberArray.shift();
        };
        var res=[];
        var originalLength = numberArray.length;
        for(var i = 0; i < originalLength; i++){
           res.push( getNextRandom());
        }
    
       document.getElementById("result").value=res.slice(0,4).join("");
    }
    