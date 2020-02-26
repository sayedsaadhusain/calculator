//this function for when click on button insert value. 
function dis(val)
{
    document.getElementById("result").value+=val; 
}     
// for calculation of equation in input .
function solve() 
{ 
    let x = document.getElementById("result").value ;
    let y = eval(x) 
    document.getElementById("result").value = y ;
} 
// all clear
function cle(){
    document.getElementById("result").value = "";
}
//work like back space
function back(){
    var ro = document.getElementById("result");
    var result = ro.value;
    result = result.substring(0, result.length - 1);
    ro.value = result;
}
        
