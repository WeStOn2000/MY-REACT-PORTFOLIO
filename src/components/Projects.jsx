import form from "../assets/form.png"
import api from "../assets/api.png"
import phase from "../assets/phase.png"
import Project from "./project";



const projectList = [
    {
      id: 1,
      title: 'OOP Game Show App',
      tech: ['Html', 'Javascript', 'Css'],
      description:
        'Welcome to the Phrase Hunter Game! This game challenges players to guess a hidden phrase by selecting letters from an onscreen keyboard or using their physical keyboard. Its a fun and engaging way to test your guessing skills.',
      liveLink: 'https://weston2000.github.io/OOP-GAME-SHOW-APP/',
      githubLink: 'https://github.com/WeStOn2000/OOP-GAME-SHOW-APP',
      image: phase,
    },
    {
      id: 2,
      title: 'Public Api Request',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description:
        "This application displays a gallery of employee profiles fetched from the Random User Generator API. Each employee card can be clicked to view detailed information in a modal window. Users can also filter employees by name using a search feature. Features: Gallery Display",
      liveLink: 'https://weston2000.github.io/Public-Api-Request/',
      githubLink: 'https://github.com/WeStOn2000/Public-Api-Request',
      image:api,
    },
    {
      id: 3,
  
      title: "Registration Form",
      tech: ['HTML', 'CSS', 'Javascript'],
      description:
        'This JavaScript code enhances the functionality of a registration form for a conference.',
      liveLink: 'https://weston2000.github.io/A-registration-Form/',
      githubLink: 'https://github.com/WeStOn2000/A-registration-Form',
      image: form,
    },
  ];
  export const Projects = () => {
    return (
      <section id="projects" className="divider">
        <h2>
          My Projects
        </h2>
        <div>
          {projectList.map((project, i)=> (
            <Project key={project.id} data={project} reverse={i % 2 === 0}/>
          ))}
        </div>
      </section>
    )
  }
  