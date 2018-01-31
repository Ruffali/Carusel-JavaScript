let activeIndex = 0; 
let slider = document.querySelector('.slider');
let left = document.querySelector('.fa-chevron-left');
let right = document.querySelector('.fa-chevron-right');
let allImage = document.querySelectorAll(".wrapper li img");
let numberDiv = document.querySelector('.number');

left.onclick = function(){
    slideLeft();
}
right.onclick = function(){
    slideRight();
}
document.addEventListener('keydown', function(event){
    if(event.keyCode == 37){
        slideLeft();
    }else if(event.keyCode == 39){
        slideRight();
    }
})
for(let i = 0; i < allImage.length; i++){
    (function(){
        let current = i;
        let img = allImage[i];
        img.onclick = function(){
        activeIndex = current;
        Slide();
    }
    }())
    
}
function Slide(){
    let imgSource = allImage[activeIndex].getAttribute('src');
    slider.style.backgroundImage = 'url('+ imgSource + ')';
    slider.classList.add('animation');
    setTimeout(function(){
        slider.classList.remove('animation');
    },1000)

    let active = document.querySelector('.active');
    active.classList.remove('active');

    allImage[activeIndex].parentElement.classList.add('active');

    numberDiv.innerHTML = activeIndex+1;
}

function slideRight(){
if(activeIndex == allImage.length - 1){
    activeIndex = 0;
  }else{
      activeIndex++;
  }
  Slide();
};

function slideLeft(){
    if(activeIndex == 0){
        activeIndex = allImage.length - 1;
      }else{
          activeIndex--;
      }
      Slide();
};
// setInterval(function(){
//     slideRight();
//     Slide();
// },3000);