var color=['#E6E6FA','#9932CC','#4B0082' ,'#8B0000']
function fun1()
{
    var num=Math.floor(Math.random()*(color.length))
    document.getElementById("tar").style.backgroundColor=color[num]
}