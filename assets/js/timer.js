delayedAlert();
var timeoutID;


function delayedAlert() {
  timeoutID = window.setTimeout(sessionAlert, 10000);
}


function sessionAlert() {
    var main = document.querySelector("main");

    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");
    main.appendChild(mainDiv);

    var div1 = document.createElement("div");
    div1.setAttribute("id", "alert");
    mainDiv.appendChild(div1);
  
    var h2 = document.createElement("h2");
    h2.textContent = "Your session is about to expire.";
    div1.appendChild(h2);

    addButtons();
}


function addButtons () { 
  var mainDiv = document.querySelector("#mainDiv"); 
  
  var div2 = document.createElement("div");
  div2.setAttribute("id", "buttons");
  mainDiv.appendChild(div2);

  var button1 = document.createElement("button");
  button1.textContent = "Stay";
  div2.appendChild(button1);

  var button2 = document.createElement("button");
  button2.textContent = "Exit";
  div2.appendChild(button2);


  button1.addEventListener("click", function(){
      window.clearTimeout(timeoutID);
      div2.removeChild(button1);
      div2.removeChild(button2);

      var div1 = document.querySelector("#alert");
      var h2 = document.querySelector("h2");
      div1.removeChild(h2);

      delayedAlert();
  });

  button2.addEventListener("click", function(){
      window.location.href = "http://google.com";
  });

}

