
var question=["2+5=?","5*8=?","9-3=?","27/3=?"]
var count=0
function fun1()
{ 
    var person=prompt("Enter your name :","Tushar Singh")
    if(person!=null && person!="")
    {
        document.getElementById("demo").innerHTML="hello "+person+" ! hit start to start the quiz";
        document.getElementById("star").style.display="block";
    }
}


function afun()
{
    document.getElementById("ques").innerHTML=question[0];
    document.getElementById("demo").innerHTML="";
    document.getElementById("hela").style.display="none";
    document.getElementById("score").innerHTML="";

}

function ans()
{
    if(document.getElementById("ques").innerHTML===question[0])
    {  
        var opt1=document.createElement("button")
        document.body.appendChild(opt1)
        opt1.innerHTML="6"

        var opt2=document.createElement("button")
        document.body.appendChild(opt2)
        opt2.innerHTML="7"

        var opt3=document.createElement("button")
        document.body.appendChild(opt3)
        opt3.innerHTML="8"
        

        opt1.onclick=function opta()
        {
            document.getElementById("result").style.color="red";
            document.getElementById("result").innerHTML="Wrong answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
        }       
        
        opt2.onclick=function opta()
        {
            document.getElementById("result").style.color="green";
            document.getElementById("result").innerHTML="correct answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
            count++;
        }     
        
        opt3.onclick=function opta()
        {
            document.getElementById("result").style.color="red";
            document.getElementById("result").innerHTML="Wrong answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
        }
        
    }
    
    
    else if(document.getElementById("ques").innerHTML===question[1])
    {
        var opt1=document.createElement("button")
        document.body.appendChild(opt1)
        opt1.innerHTML="63"

        var opt2=document.createElement("button")
        document.body.appendChild(opt2)
        opt2.innerHTML="70"

        var opt3=document.createElement("button")
        document.body.appendChild(opt3)
        opt3.innerHTML="40"

        opt1.onclick=function opta()
        {
            document.getElementById("result").style.color="red";
            document.getElementById("result").innerHTML="Wrong answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
        }

        opt2.onclick=function opta()
        {
            document.getElementById("result").style.color="red";
            document.getElementById("result").innerHTML="Wrong answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
        }

        opt3.onclick=function opta()
        {
            document.getElementById("result").style.color="green";
            document.getElementById("result").innerHTML="correct answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
            count++;
        }

        
    }
    
    
    else if(document.getElementById("ques").innerHTML===question[2])
    {
        var opt1=document.createElement("button")
        document.body.appendChild(opt1)
        opt1.innerHTML="6"

        var opt2=document.createElement("button")
        document.body.appendChild(opt2)
        opt2.innerHTML="-7"

        var opt3=document.createElement("button")
        document.body.appendChild(opt3)
        opt3.innerHTML="41"

        opt1.onclick=function opta()
        {
            document.getElementById("result").style.color="green";
            document.getElementById("result").innerHTML="correct answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
            count++;
        }

        opt2.onclick=function opta()
        {
            document.getElementById("result").style.color="red";
            document.getElementById("result").innerHTML="Wrong answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
        }

        opt3.onclick=function opta()
        {
            document.getElementById("result").style.color="red";
            document.getElementById("result").innerHTML="Wrong answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
        }

       
    }
    
    else if(document.getElementById("ques").innerHTML===question[3])
    
    {
        var opt1=document.createElement("button")
        document.body.appendChild(opt1)
        opt1.innerHTML="9"

        var opt2=document.createElement("button")
        document.body.appendChild(opt2)
        opt2.innerHTML="7"

        var opt3=document.createElement("button")
        document.body.appendChild(opt3)
        opt3.innerHTML="12"

        opt1.onclick=function opta()
        {
            document.getElementById("result").style.color="green";
            document.getElementById("result").innerHTML="correct answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
            count++;
        }

        opt2.onclick=function opta()
        {
            document.getElementById("result").style.color="red";
            document.getElementById("result").innerHTML="Wrong answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)
        }

        opt3.onclick=function opta()
        {
            document.getElementById("result").style.color="red";
            document.getElementById("result").innerHTML="Wrong answer"
            opt1.style.display="none"
            opt2.style.display="none"
            opt3.style.display="none"
            setTimeout(next,1000)            
        }    
     
    }
   
}

function next()
{
    var i=0;
    document.getElementById("result").innerHTML=""
    for(i;i<question.length-1;i++){
        if(document.getElementById("ques").innerHTML===question[i])
        {
            document.getElementById("ques").innerHTML=question[i+1]
            ans()
            break;
        }
        if(document.getElementById("ques").innerHTML==question[3])
        {
            document.getElementById("ques").style.display="none"
            document.getElementById("score").innerHTML="total score is "+count+" out of 4 ! !"
            document.getElementById("score").style.color="green"
            document.getElementById("score").style.fontSize="25px"     
        }
        
    }
}