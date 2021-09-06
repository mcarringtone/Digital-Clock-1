
function clockApp(){

  const fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  if(hours < 10){
    hours = "0" + hours
  }
  if(minutes < 10){
    minutes = "0" + minutes
  }
  if(seconds < 10){
    seconds = "0" + seconds
  }
  if(hours > 12){
    hours = hours - 12
    hours = "0" + hours
  }
  document.getElementById("Hours").innerHTML = hours + ":"
  document.getElementById("Minutes").innerHTML = minutes + ":"
  document.getElementById("Seconds").innerHTML = seconds 
}




setInterval(clockApp,1000)


