const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
const randomButton = document.querySelector(".randombtn");
function generateColor() {
  let letters = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
randomButton.addEventListener("click", () => {
  let randomColor = generateColor();
  alert(randomColor);
  body.style.backgroundColor = randomColor;
});

buttons.forEach(
    (button)=>{button.addEventListener('click',(e)=>{
        if(e.target.id === 'yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'grey'){
            body.style.backgroundColor=e.target.id;
        }
        
    });
});