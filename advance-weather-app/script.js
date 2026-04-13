async function weather() {
    let leo=document.getElementById("city").value;
    let result=document.getElementById("result");
    result.innerText="Loading...";
   

    try{

        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${leo}&appid=
042c8523780344257b97c0974c649a81&units=metric`);

if(!res.ok){
    throw new Error("City is not found");
}

let data=await res.json();

result.innerText=`City:${data.name}
Temperature:${data.main.temp}℃
Weather: ${data.weather[0].main}`
}

catch(error){
result.innerText="City not found";
}
    
    
}


