var getLaTime = function(){
      document.getElementById("laTime").innerHTML = new Date().toLocaleString("en-US", {timeZone:'America/Los_Angeles',timeStyle:'medium',hourCycle:'h24'});
    }

  getLaTime();
  setInterval(getLaTime,1000);

     

