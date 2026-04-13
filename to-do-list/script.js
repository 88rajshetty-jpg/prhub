function Nok(){
let nick=document.getElementById("todo").value.trim();
let input = document.getElementById("todo");
let errorMsg = document.getElementById("error-message");

  if (nick === "") {
    input.classList.add("error");
    errorMsg.classList.add("show");
    return; // stop function
  } else {
    input.classList.remove("error");
    errorMsg.classList.remove("show");
  }

let li=document.createElement("li");
li.innerText=nick;


document.getElementById("list").appendChild(li);
document.getElementById("todo").value="";

}