AOS.init({
    duration: 1600, 
    offset: 100,    
    once: false ,
});

let allBtn = document.querySelector(".seeall");
      let cardHidden = document.querySelector(".hidden");
      let lessBtn = document.querySelector(".seeless");

      allBtn.addEventListener("click", function () {
        allBtn.style.display = "none";
        lessBtn.style.display = "block";
        cardHidden.style.display = "inherit";
      });

      lessBtn.addEventListener("click", function () {
        lessBtn.style.display = "none";
        cardHidden.style.display = "none";
        allBtn.style.display = "inherit";
      });