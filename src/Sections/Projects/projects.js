import './projects.css';
import Heading from '../Heading/heading'

function Projects() {
  return (
    <div class="projects-container">
      <div class="projects-heading">
        <Heading text="Projects"/>
        <div class="projects-box-container">
          <div class="project-box project-box-h1">
            <p>Project 1</p>
          </div>
          <div class="project-box project-box-h1">
            <p>Project 2</p>
          </div>
          <div class="project-box project-box-h1">
            <p>Project 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects
