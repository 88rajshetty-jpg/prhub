let text=document.getElementById("text");
let amount=document.getElementById("amount");
let addBtn=document.getElementById("addBtn");
let list=document.getElementById("list");
let balance=document.getElementById("balance");

let transactions=JSON.parse(localStorage.getItem("transactions"))|| [];

addBtn.addEventListener("click", addTransaction);

function addTransaction(){
let desc=text.value;
let amt=Number(amount.value);

if(desc==="" || amt===0) return(
    alert("wait")
);

let transaction={
    id:Date.now(),
    text:desc,
    amount:amt
};

transactions.push(transaction);

localStorage.setItem("transactions",JSON.stringify(transactions));

displayTransactions();

text.value="";
amount.value="";
}

function displayTransactions(){

    list.innerHTML="";
    let total=0;

    transactions.forEach( function(t){
        let li=document.createElement("li");

        li.innerText = t.text + " ₹ " + t.amount;
        
        let delBtn=document.createElement("button");
        delBtn.innerText="X";
        delBtn.className="delete";

        delBtn.addEventListener("click",function()
        {
         transactions=transactions.filter(item=>item.id!==t.id);
          
         localStorage.setItem("transactions",JSON.stringify(transactions));
         
        displayTransactions();

        });

        li.appendChild(delBtn);
        list.appendChild(li);

        total+=t.amount;
    });
    balance.innerText=total;

}

displayTransactions();