const max = 255;
const min = 0;
const startbutton = document.querySelector("#start");
const stopbutton = document.querySelector("#stop");
let started;// global declaration of started variable so that we can use it anywhere
startbutton.addEventListener("click", function () {
  if (!started) {// checking if the value of varibale is null then we can add value to it
    started = setInterval(() => {
      const r = Math.floor(Math.random() * (max + min - 1)) + min;
      const g = Math.floor(Math.random() * (max + min - 1)) + min;
      const b = Math.floor(Math.random() * (max + min - 1)) + min;
      document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    }, 1000);
  }
});

stopbutton.addEventListener("click", function () {
  clearInterval(started);
  started = null;// flushing out the used value of variable for more efficient memory saving
});
