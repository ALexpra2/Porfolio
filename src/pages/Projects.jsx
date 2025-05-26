import projects from '../data/Projects';
import './pages.css';

function Projects() {
  return (
    <>
      <div className="divProjects">
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="project-item">
              <h2>Proyecto: {project.name}</h2>
              <img src={project.image} alt={`Imagen de ${project.name}`} className="project-image" />
              <p><strong>Descripción:</strong> {project.description}</p>
              <p><strong>Tecnologías:</strong> {project.technologies}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                🔗 Ver Proyecto
              </a>
              {project.github && (
                <p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    📂 Ver Código en GitHub
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Projects;
