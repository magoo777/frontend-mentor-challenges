import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  // Hämta JSON-filen från /public/data/projects.json
  useEffect(() => {
    fetch('./data/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  // Funktion för att returnera en färgad tag
  function tags(tag, i){
    switch(tag) {
      case "HTML":
        return <span key={i} style={{ color: 'yellow' }}>{tag}</span>
      case "CSS":
        return <span key={i} style={{ color: 'pink' }}> {tag} </span>
      case "JS":
        return <span key={i} style={{ color: 'lightblue' }}> {tag} </span>
      case "React":
        return <span key={i} style={{ color: 'purple' }}> {tag} </span>
      default:
        return <span key={i} style={{ color: 'lightgrey' }}> {tag} </span>
    }
  }

  return (
    <div className="project-list">
      <ul className="flex flex-wrap">
        {projects.map((project) => (
          <li key={project.id} className="card" target="_blank" rel="noopener noreferrer">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <div className="p-4"> 
              <h2>{project.title}</h2>
              <div>
                {project.tags.map((tag, i) => tags(tag, i))}
              </div>
              <p>{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
