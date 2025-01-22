//Calculator in JS
const display = document.getElementById("desired");
 function appendToDisplay(input){
desired.value += input;
 }

 function clearDisplay(){
desired.value = "";
 }

 function calculate(){
    try{
        desired.value = eval(desired.value);
    }
    catch(error){
        desired.value = "Syntax Error";
    }
 }

