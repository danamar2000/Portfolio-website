import './hero.css';
import Button from '../../Components/Buttons/button'
import Hero from '../../Assets/heroimage.jpg'

function Dan() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="hero-image">
          <img src={Hero} alt="heroimage"/>
          <div class="hero-text">
            <h1>I am dan</h1>
            <p>I'm a CyberSecurity Analyst</p>
            <Button text="Hire Me"/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Dan
