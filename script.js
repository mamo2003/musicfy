var boton = document.getElementById("boton");
boton.addEventListener("click", function(){
    if (!sound) {
      v.play();
      this.innerHTML = "Pause";
      sound = true;
     } else {
      v.pause();
      this.innerHTML = "Play";
      sound = false;
     } 
   });