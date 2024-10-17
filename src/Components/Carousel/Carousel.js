import '../../Sections/Projects/projects.css';
import heroimage2 from './../../Assets/heroimage2.jpg';
import heroimage1 from './../../Assets/heroimage1.jpg';
import heroimage from './../../Assets/heroimage.jpg';

function Carousel() {
  return (
    <div class="carousel">
      <div class="list">
        <div class="item">
          <img class="hero-image" src={heroimage2} alt="heroimage"/>
        </div>

        <div class="item">
          <img class="hero-image" src={heroimage1} alt="heroimage"/>
          <div class="content">
            <div class="title">Project 1</div>
            <div class="name">SIEM</div>
            <div class="des">Lorem kjncksndckjnsknccc dkscnjskdjc dkcjnsdknjcsdk cksdjncsdc</div>
          </div>
        </div>

        <div class="item">
          <img class="hero-image" src={heroimage} alt="heroimage"/>
          <div class="content">
            <div class="title">Project 2</div>
            <div class="name">File integrity</div>
            <div class="des">Lorem kjncksndckjnsknccc dkscnjskdjc dkcjnsdknjcsdk cksdjncsdc</div>
          </div>
        </div>

        <div class="item">
          <img class="hero-image" src={heroimage2} alt="heroimage"/>
          <div class="content">
            <div class="title">Project 3</div>
            <div class="name">Pen test</div>
            <div class="des">Lorem kjncksndckjnsknccc dkscnjskdjc dkcjnsdknjcsdk cksdjncsdc</div>
          </div>
        </div>

        <div class="item">
          <img class="hero-image" src={heroimage1} alt="heroimage"/>
          <div class="content">
            <div class="title">Project 4</div>
            <div class="name">Network</div>
            <div class="des">Lorem kjncksndckjnsknccc dkscnjskdjc dkcjnsdknjcsdk cksdjncsdc</div>
          </div>
        </div>

        <div class="item">
          <img class="hero-image" src={heroimage2} alt="heroimage"/>
          <div class="content">
            <div class="title">Project 5</div>
            <div class="name">Wireshark</div>
            <div class="des">Lorem kjncksndckjnsknccc dkscnjskdjc dkcjnsdknjcsdk cksdjncsdc</div>
          </div>
        </div>
      </div>
      <div class="arrows">
        <button class="prev">&lt;</button>
        <button class="next">&gt;</button>
      </div>
      <div class="timeRunning">

      </div>
    </div>
  );
  var nextBtn = document.querySelector('.next'),
  prevBtn = document.querySelector('.prev'),
  carousel = document.querySelector('.carousel'),
  list = document.querySelector('.list'),
  runningTime = document.querySelector('.timeRunning')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function(){
showSlider('next')
}

prevBtn.onclick = function(){
  showSlider('prev')
}

let runTimeOut
let runNextAuto = setTimeout(() =>{
nextBtn.click()
}, timeAutoNext)

function resetTimeAnimation(params) {
  runningTime.style.animation = 'none'
  runningTime.style.animation = null
  runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}

function showSlider(type) {
  let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
  if(type === 'next'){
    list.appendChild(sliderItemsDom[0])
    carousel.classList.add('next')
  } else{
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
      carousel.classList.add('prev')
  }

  clearTimeout(runTimeOut)

  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next')
    carousel.classList.remove('prev')
  }, timeRunning);

  clearTimeout(runNextAuto)
  runNextAuto = setTimeout(() => {
    nextBtn.click()
  }, timeAutoNext);

  resetTimeAnimation()
}
}

export default Carousel
