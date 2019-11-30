var targetList = document.getElementsByClassName("circle");
var counter = 0;

function getRandomInt(min, max, curr) {
 return Math.floor(Math.random() * (max - min)) + min;
}

targetList[getRandomInt(0,15)].classList.add("white");

document.getElementsByClassName("circle").forEach(addEventListener("click", function(e){
  if (e.target.classList.contains("circle")){
    e.target.className.contains
    if (e.target.classList.contains('white')){
      e.target.classList.remove("white");
      counter++;
      document.getElementById("counter").textContent = counter;

      this.setTimeout(function() {
        targetList[getRandomInt(0,15)].classList.add("white");
      }
        ,1000);

    }
  }
}));





