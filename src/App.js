import './App.css';
import Hero from './Sections/Hero/hero';
import Projects from './Sections/Projects/projects'
import Navbar from './Sections/NavBar/navbar';
import Aboutme from './Sections/Aboutme/aboutMe'

function App() {
  return (
    <div>
       <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Aboutme/>
      </div>
    </div>
  );
}

export default App;
