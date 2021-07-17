var dpb = 0;
var bminus = 0;
var bplus = 0;

var dpd = 0;
var dminus = 0;
var dplus = 0;

var dpt = 0;
var tminus = 0;
var tplus = 0;

var dpsf = 0;
var sfminus = 0;
var sfplus = 0;

var dplive = 0;
var liveminus = 0;
var liveplus = 0;

function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    dplive = h + bminus + bplus + clickme + eartmars;
    document.getElementById('livetime').innerHTML =
    dplive + ":" + m + ":" + s;
    if(dplive >= 24){
      liveminus = liveminus - 24;
    }
    else if(dpb <= 0){
      liveplus = liveplus + 24;
    }

    dpb = h + 5 + bminus + bplus + clickme;
    document.getElementById('bangkok').innerHTML =
    dpb + ":" + m + ":" + s;
    if(dpb >= 24){
      bminus = bminus -24;
    }
    else if(dpb <= 0){
      bplus = bplus + 24;
    }

    dbd = h + 2 + dminus + dplus + clickme;
    document.getElementById('dubai').innerHTML =
    dbd + ":" + m + ":" + s;
    if(dpd >= 24){
      dminus = dminus - 24;
    }
    else if(dpb <= 0){
      dplus = dplus + 24;
    }

    dpt = h + tminus + tplus + clickme - 6;
    document.getElementById('toronto').innerHTML =
    dpt + ":" + m + ":" + s;
    if(dpt >= 24){
      tminus = tminus - 24;
    }
    else if(dpt <= 0){
      tplus = tplus + 24;
    }

    dpsf = h + sfminus + sfplus + clickme -9;
    document.getElementById('sf').innerHTML =
    dpsf + ":" + m + ":" + s;
    if(dpsf >= 24){
      sfminus = sfminus - 24;
    }
    else if(dpsf <= 0){
      sfplus = sfplus + 24;
    }


    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

  var clickme = 0;
  function plush(){
      clickme += 1;
      document.getElementById("clickme").innerHTML = clickme;
  }
  function minush(){
    clickme -= 1;
    document.getElementById("clickme").innerHTML = clickme;
}

var eartmars = 0;
function earth(){
  console.log("runs");
  var element = document.getElementById("earth1");
  element.classList.toggle("border-success");
  var element = document.getElementById("mars1");
  element.classList.toggle("border-success");
  if (eartmars==12) {
    eartmars = 0;
  }
  if (eartmars==0) {
    eartmars = 12;
  }
}

function mars(){
  var element = document.getElementById("mars1");
  element.classList.toggle("border-success");
  var element = document.getElementById("earth1");
  element.classList.toggle("border-success");
  if (eartmars==0) {
    eartmars = 12;
  }
  if (eartmars==12) {
    eartmars = 0;
  }
}
  