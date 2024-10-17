import './hero.css';
import heroimage1 from './../../Assets/heroimage1.jpg';

function Dan() {
  return (
    <div className="App">
        <div class="hero-container">
          <img class="hero-image" src={heroimage1} alt="heroimage"/>
          <div class="hero-text">
            <p>I'm a <strong class="hero-image-heading">CyberSecurity</strong> Analyst</p>
          </div>
        </div>
    </div>
  );
}

export default Dan
