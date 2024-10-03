import './App.css';
import Hero from './Sections/Hero/hero';
import Projects from './Sections/Projects/projects'
import Navbar from './Sections/NavBar/navbar';

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
    </div>
  );
}

export default App;
