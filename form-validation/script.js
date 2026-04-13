function check(){
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");
    let input = document.getElementById("email");

    if(email.includes("@") && email.includes(".")){
        msg.innerText = "Valid Email";
        msg.className = "valid";
        input.className = "valid";
    } else {
        msg.innerText = "Invalid Email";
        msg.className = "invalid";
        input.className = "invalid";
    }
}