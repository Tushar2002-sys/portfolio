function func(){
    var x=document.getElementById("name").value
    document.getElementById("button").style.fontSize="80px"
    document.getElementById("button").style.color="red"   
    document.getElementById("button").innerHTML="HELLO"+x

}
function table(){

    var x=document.getElementById("num").value 
    var arr=[] 
    for(var i=1;i<11;i++){
        arr.push(x*i+"   ")
    }
    document.getElementById("button").innerHTML=arr

}