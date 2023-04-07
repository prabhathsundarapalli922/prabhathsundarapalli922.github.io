window.addEventListener("load", function() {
   
    var splash = document.getElementById("splash");
    splash.style.display = "flex";
    
    setTimeout(function() {
        splash.style.display = "none";
    }, 2000);
});
window.addEventListener('load', function () {
    setTimeout(function () {
      const notification = document.getElementById("notification");
      if (notification) {
        notification.innerHTML = "Hello! Welcome to my website.";
        notification.style.display = "block";
      }
    }, 2000); 
  });
  window.addEventListener("DOMContentLoaded", function() {const changeBackgroundButton = document.querySelector('#change-background-button');
  changeBackgroundButton.addEventListener('click', function() {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'darkblue';
  });});  
 



    
