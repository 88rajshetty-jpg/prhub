async function Searchmovie(){
let mov=document.getElementById("movieinput").value;

if(!mov.trim()) {
  document.getElementById("movieresult").innerHTML="<p style='color: red;'>Please enter a movie name</p>";
  return;
}

document.getElementById("movieresult").innerText="Loading...";

try {
  let res=await fetch(`https://www.omdbapi.com/?t=${mov}&apikey=2f213bdd`);
  let data=await res.json();

  if(data.Response === "False") {
    document.getElementById("movieresult").innerHTML=`<p style='color: red;'>Movie not found: ${data.Error}</p>`;
    return;
  }

  document.getElementById("movieresult").innerHTML=`
  <h2>${data.Title}</h2>
  <img src="${data.Poster}" alt="${data.Title}">
  <p><b>Year:</b> ${data.Year}</p>
  <p><b>Rating:</b> ${data.imdbRating}</p>
  <p>${data.Plot}</p>
  `;
} catch(error) {
  document.getElementById("movieresult").innerHTML=`<p style='color: red;'>Error: ${error.message}</p>`;
}
}