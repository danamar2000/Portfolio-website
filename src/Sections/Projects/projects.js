import './projects.css';
import heroimage2 from './../../Assets/heroimage2.jpg';
import heroimage1 from './../../Assets/heroimage1.jpg';
import heroimage from './../../Assets/heroimage.jpg';

function Projects() {
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
}

export default Projects
