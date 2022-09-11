
/*
Multiplying
*/

document.getElementById("multiply").onclick = function(multiply){
    value = document.getElementById("value").value;
    value2 = document.getElementById("value2").value;

    let answer = value * value2
    alert(answer);
}

/*
Divide
*/
document.getElementById("divide").onclick = function(divide){
    value = document.getElementById("val1div").value;
    value2 = document.getElementById("val2div").value;

    let answer = value / value2
    alert(answer);
}