const Buttons = document.querySelectorAll(".btn");
let digit = document.querySelector(".digit");

let count = 0;


Buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    }
    else if(styles.contains("decrease")){
        count--;
    }
    else {
        count = 0;
    }
  });
});
