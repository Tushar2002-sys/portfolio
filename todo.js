var enterButton=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var item=document.getElementsByTagName("li");




function createlistelement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";


    function crossout()
    {
        li.classList.toggle("done");

    }
    li.addEventListener("click",crossout);

    function deleteListItem(){
        li.classList.add("delete")

    }



    var dbtn=document.createElement("button");
    dbtn.appendChild(document.createTextNode("X"));
    li.appendChild(dbtn);
    dbtn.addEventListener("click",deleteListItem); 
}

function inputlength()
{
    return input.value.length;
}


function addListAfterClick(){
    if(inputlength()>0)
    {
        createlistelement();
    }
}
 

function addListAfterKeypress(){
    if(inputlength()>0 && event.which === 13)
    {
        createlistelement();
    }
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);