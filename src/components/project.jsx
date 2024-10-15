import PropTypes from 'prop-types';
import Link from "../components/Link";

export const Project = ({ data, reverse }) => {
  return (
    <article className="project" style={{
      flexDirection: reverse ? 'row-reverse' : 'row',
    }}>
      <div className="image">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="content">
        <h3>{data.title}</h3>
        <ul>
          {data.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p>{data.description}</p>
        <div>
          <Link href={data.liveLink}>Live Site</Link>
          <Link href={data.githubLink}>Github</Link>
        </div>
      </div>
    </article>
  );
};

// Prop type validations
Project.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,       // 'image' must be a string
    title: PropTypes.string.isRequired,       // 'title' must be a string
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,  // 'tech' must be an array of strings
    description: PropTypes.string.isRequired, // 'description' must be a string
    liveLink: PropTypes.string.isRequired,    // 'liveLink' must be a string (URL)
    githubLink: PropTypes.string.isRequired,  // 'githubLink' must be a string (URL)
  }).isRequired,
  reverse: PropTypes.bool, // 'reverse' must be a boolean (optional)
};

export default Project;
