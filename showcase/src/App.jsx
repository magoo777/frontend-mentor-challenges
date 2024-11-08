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

  return (
    <div className="project-list">
      <ul className='flex'>
      {projects.map((project) => (
        <li key={project.id} className='card' target="_blank" rel="noopener noreferrer">

            <a href={project.link} target='_blank'><img src={project.image} alt={project.title}/></a>
            <div className='p-4'> 
            <h2>{project.title}</h2>
            {project.tags.map((tag, i) => {
              return <span key={i}> {tag} </span>
            })}
            <p>{project.description}</p>
          </div>
        </li>
      ))}
       </ul>
    </div>
  );
}

export default App;
