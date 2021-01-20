


const time = 1028;

for (let i of document.querySelectorAll(".counter")){
   let numberTop = i.getBoundingClientRect().top,
      start = +i.innerHTML,
      end = +i.getAttribute('data-target');  
    // end = +i.dataset.max;
   window.addEventListener("scroll", function onScroll() {
      if (window.pageYOffset > numberTop - window.innerHeight / 2) {
      this.removeEventListener("scroll", onScroll);
      let interval = this.setInterval(function () {
   start += (end/time);
         i.innerHTML = Math.floor( start);
         if (start > end) {
   i.innerHTML = end;
            clearInterval(interval);
         }
         }, 1);
      }
   });
}