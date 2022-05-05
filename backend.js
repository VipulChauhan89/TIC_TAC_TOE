var count=0;
var stop=0;
function toe(a)
{
    var b="b";
    var c=b.concat(a);
    if(document.getElementById(c).value!="" || stop==1)
    {
        return ;
    }
    if(count%2==0)
    {
        document.getElementById(c).className="b";
        document.getElementById(c).value="X";
        count++;
    }
    else
    {
        document.getElementById(c).className="b1";
        document.getElementById(c).value="0";
        count++;
    }
    if(count%2==0)
    {
        document.getElementById("turn").className="red";
        document.getElementById("turn").value="X's turn";
    }
    else
    {
        document.getElementById("turn").className="green";
        document.getElementById("turn").value="0's turn";
    }
    tac();
}   
function tac()
{
    var b0=document.getElementById("b0").value;
    var b1=document.getElementById("b1").value;
    var b2=document.getElementById("b2").value;
    var b3=document.getElementById("b3").value;
    var b4=document.getElementById("b4").value;
    var b5=document.getElementById("b5").value;
    var b6=document.getElementById("b6").value;
    var b7=document.getElementById("b7").value;
    var b8=document.getElementById("b8").value;
    if((b0=="X" && b1=="X" && b2=="X") || (b3=="X" && b4=="X" && b5=="X") || (b6=="X" && b7=="X" && b8=="X") || (b0=="X" && b3=="X" && b6=="X") || (b1=="X" && b4=="X" && b7=="X") || (b2=="X" && b5=="X" && b8=="X") || (b0=="X" && b4=="X" && b8=="X") || (b2=="X" && b4=="X" && b6=="X"))
    {
        document.getElementById("result").className="red";
        document.getElementById("result").value="X win the game 🥳🥳";
        stop=1;
    }
    else if((b0=="0" && b1=="0" && b2=="0") || (b3=="0" && b4=="0" && b5=="0") || (b6=="0" && b7=="0" && b8=="0") || (b0=="0" && b3=="0" && b6=="0") || (b1=="0" && b4=="0" && b7=="0") || (b2=="0" && b5=="0" && b8=="0") || (b0=="0" && b4=="0" && b8=="0") || (b2=="0" && b4=="0" && b6=="0"))
    {
        document.getElementById("result").className="green";
        document.getElementById("result").value="0 win the game 🥳🥳";
        stop=1;
    }
    else if(b0!="" && b1!="" && b2!="" && b3!="" && b4!="" && b5!="" && b6!="" && b7!="" && b8!="")
    {
        document.getElementById("result").className="black";
        document.getElementById("result").value="Draw 🤷‍♂️";
    }
}
function reset()
{
    count=0;
    stop=0;
    document.getElementById("b0").value="";
    document.getElementById("b1").value="";
    document.getElementById("b2").value="";
    document.getElementById("b3").value="";
    document.getElementById("b4").value="";
    document.getElementById("b5").value="";
    document.getElementById("b6").value="";
    document.getElementById("b7").value="";
    document.getElementById("b8").value="";
    document.getElementById("result").value="";
    document.getElementById("turn").className="red";
    document.getElementById("turn").value="X's turn";
}