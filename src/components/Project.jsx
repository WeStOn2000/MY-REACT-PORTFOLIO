import PropTypes from "prop-types"

const Project = ({data}) => {
  return (
  <article className="project">
    <div className="image"><img src={data.image} alt={data.title} />
    </div>
    <div className="content">
        <h3>{data.title}</h3>
        <ul>
            {data.tech.map((tech) => {
                <li key={tech}>{tech}</li>
            })}
        </ul>
        <p>{data.description}</p>
    </div>
  </article>
  )
}


Project.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}


export default Project
