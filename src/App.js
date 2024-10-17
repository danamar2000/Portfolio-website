import './App.css';
import Hero from './Sections/Hero/hero';
import Navbar from './Sections/NavBar/navbar';
import Aboutme from './Sections/Aboutme/aboutMe'
import Carousel from './Components/Carousel/Carousel'

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
        <Carousel />
      </div>
      <div>
        <Aboutme/>
      </div>
    </div>
  );
}

export default App;
