function dessiner_triangle() {
    var canevas = document.querySelectorAll('.triangle');
    canevas.forEach(caneva => {
        if (caneva.getContext) {
            var ctx = caneva.getContext('2d');
        
            var gradient = ctx.createLinearGradient(250, 0, 0, 100);
            gradient.addColorStop(0, '#4158d0');
            gradient.addColorStop(0.46, '#c850c0');
            gradient.addColorStop(1, '#ffcc70');
            ctx.fillStyle = gradient;
      
            ctx.beginPath();
            ctx.moveTo(0, 300);
            ctx.lineTo(300, 300);
            ctx.lineTo(150, 0);
            ctx.fill();
          }
    })
}

function dessiner_carre(){
    var canevas = document.querySelectorAll('.carre');
    canevas.forEach(caneva => {
        if (caneva.getContext) {
            var ctx = caneva.getContext('2d');
        
            var gradient = ctx.createLinearGradient(250, 0, 0, 100);
            gradient.addColorStop(0, '#4158d0');
            gradient.addColorStop(0.46, '#c850c0');
            gradient.addColorStop(1, '#ffcc70');
            ctx.fillStyle = gradient;
      
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.rect(0,0,300,300);
            ctx.fill();
          }
    })
}

dessiner_triangle();
dessiner_carre();


const content = document.querySelector(".content");
const valeur_x = document.querySelector(".valeur_x");
const valeur_y = document.querySelector(".valeur_y");
const reset = document.querySelector(".reset");
const x = document.querySelector("#range_x"),
  y = document.querySelector("#range_y");

content.style.transform = "rotateX(" + x.value + "deg)" + "rotateY(" + y.value + "deg)";

x.addEventListener(
  "input",
  function () {
    content.style.transform = "rotateX(" + x.value + "deg)" + "rotateY(" + content.style.transform.slice(-4 + -y.value.length, -4) + "deg)";
    valeur_x.innerHTML = x.value + "°";
  },
  false
);

y.addEventListener(
  "input",
  function () {
    content.style.transform = "rotateX(" + content.style.transform.slice(8, 8 + x.value.length) + "deg)" + "rotateY(" + y.value + "deg)";
    valeur_y.innerHTML = y.value + "°";
  },
  false
);

reset.addEventListener("click", () => {
    x.value = 0;
    y.value = 0;

    valeur_x.innerHTML = x.value + "°";
    valeur_y.innerHTML = y.value + "°";

    content.style.transform = "rotateX(" + x.value + "deg)" + "rotateY(" + y.value + "deg)";
})