const state ={
    scores:{
        player1:0,
        player2:0

    },
    squares:Array(9).fill(null),
        
};
function calculateWinners(squares)
{
    const wininng_lines=[
        [0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];  

    for(var i=0;i<wininng_lines.length();i++)
    {
        const [a,b,c]=wininng_lines[i];
        if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
        {
            showWinner(squares[a]);
            setTimeout(()=>resetBoard(null),1000)
            return squares[a]
        }
        if(!squares.include(null))
        {
            showWinner(null);
            setTimeout(()=>resetBoard(null),1000)
            return
        }
        return null;
    }
}


function resetBoard(winner)
{
    if(winner)
    {
        if(winner==='X')
        {
            state.scores.player1++;
        }
        else
        {
            state.scores.player2++;
        }
    }
    state.squares=Array(9).fill(null);
    state.xIsNext=true;
    document.getElementById("player1").text(state.scores.player1);
    document.getElementById("player2").text(state.scores.player2);
    renderBoard();
}

function showWinner(winner)
{
    const alert_box=$("#alert-box")
    if(winner)
    {
       if(alert_box==="X")
        {
            winner="player1"
        }
       else
        {
            winner="player2"
        }
        alert_box.html(`${winner} <strong>Won !</strong>`)
    }   
    else
    {
        alert_box.html(`it is a Draw`);
    }
    alert_box.slideDown();
    setTimeout(()=>alert_box.slideUp(),1000);

    
}




function renderBoard()
{
    let board_html=''
    for(let i=0;i<9;i++)
    {
        board_html+=rendersquares(i)
    }
    $("#board").innerHTML=board_html
    calculateWinners(state.squares)


}

function boxclick(index)
{
    const squares=state.squares;
    if(calculateWinners(squares) || squares[index])
    {
        return;
    }
    squares[index]=state.xIsNext ?'X':'0'
    state.squares=squares 
    state.xIsNext=!state.xIsNext;
    renderBoard();
}






function rendersquares(index)
{
    
    const val = state.squares[index]?state.squares[index] : "&nbsp;";
    return `<div value=${index}  class="box  col-lg-4  col-md-4  col-sm-4  col-xs-4" onclick="boxClick(${index})">${val}</div>`
}


function resetGame()
{
    state.scores.player1=0
    state.scores.player2=0
    resetBoard(null);
}



$(
    ()=>
    {
        renderBoard();
        $("#alert-box").slideUp(0.0001);
        $("#clear").on("click",()=>resetBoard(null))
        $("#reset").on("click",()=>resetGame())
    }
)