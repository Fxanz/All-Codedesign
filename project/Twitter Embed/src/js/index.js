const logo = document.querySelector(".logo-container");

logo.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.querySelector("main").classList.toggle("light");
  const fade = document.querySelectorAll(".fade");
  
  fade.forEach((element) => {
    element.classList.toggle("light");
  });

  const heart = document.getElementById("heart-icon");
  heart.classList.toggle("light");
  if(heart.classList.contains('light')){
    heart.src = './src/assets/images/heart-dark.png'
  }else{
    heart.src = './src/assets/images/heart.svg'
  }
});
