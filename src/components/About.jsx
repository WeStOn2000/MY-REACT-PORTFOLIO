import Link from "./Link"

const About = () => {
  return (
    <section id="about" className="about-diviner">
      <h2>About me</h2>
      <p>As a skilled full stack JavaScript developer, 
      I bring a comprehensive understanding of both front-end and back-end development, 
      enabling me to create seamless and efficient web applications. 
      My expertise in JavaScript frameworks like React and Node.js allows me to develop dynamic user interfaces and robust server-side logic. 
      Potential employers will benefit from my ability to handle all aspects of the development process, 
      from designing responsive layouts to managing databases and APIs. 
      This versatility not only streamlines project workflows but also ensures the delivery of high-quality, 
      scalable solutions that meet modern business needs.
      </p>
      <Link className="btn" href="#">Download My Resume</Link>
    </section>
  )
}

export default About
