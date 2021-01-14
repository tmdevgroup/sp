// const counters = document.querySelectorAll('.counter');
// const speed = 200;

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		const inc = target / speed;

// 		if (count < target) {
// 			counter.innerText = Math.ceil(count + inc);
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// });



// for (let i of document.querySelectorAll(".counter")){
//   let numberTop = i.getBoundingClientRect().top,
//     start = +i.innerHTML,
//     end = +i.dataset.max;
//   window.addEventListener("scroll", function onScroll() {
//       if (window.pageYOffset > numberTop - window.innerHeight / 2) {
//       this.removeEventListener("scroll", onScroll);
//       let interval = this.setInterval(function () {
//         i.innerHTML = ++start;
//         if (start == end) {
//             clearInterval(interval);
//           }
//           }, 0);
//       }
//     });
// }



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