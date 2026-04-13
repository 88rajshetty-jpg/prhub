let lengthInput=document.getElementById("length")

let numbersCheck=document.getElementById("number");

let symbolCheck=document.getElementById("symbol");

let result= document.getElementById("result");

let generatebutton=document.getElementById("generate");

let copy=document.getElementById("copy");

generatebutton.addEventListener("click",generatePassword);

copy.addEventListener("click", copyPassword);

function generatePassword(){

    let letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers="0123456789";
    let symbols="!@#$%^&*()";
   

    if(numbersCheck.checked){
        letters+=numbers;
    }

    if(symbolCheck.checked){
        letters+=symbols;
    }

    let password="";

    for(let i=0;i<lengthInput.value;i++){
        let random=Math.floor(Math.random()*letters.length);
        password+=letters[random];
    }

    result.value=password;

}  
function copyPassword(){
    result.select();
    document.execCommand("copy");
    alert("Password Copied");
}