import Link from "./Link";

const About = () => {
  return (
    <section id="about" className="about divider">
      <h2>About Me</h2>
      <p>
        Hello! I&#39;m Weston Rwigema, a passionate Full Stack JavaScript
        Developer with a strong foundation in both front-end and back-end
        technologies. I recently graduated with a Full Stack JavaScript
        Development degree from Team Treehouse, where I honed my skills in
        React, Node.js, and Express.js.
      </p>
      <p>
        I am a highly adaptable Full Stack JavaScript Developer with a strong
        work ethic, always going above and beyond to meet expectations and
        achieve goals. I have hands-on experience with React, Node.js, Express,
        and REST APIs, and I have tackled real-world challenges such as user
        authentication, API validation, and state management using the React
        Context API. My passion for continuous learning, attention to detail,
        and commitment to growth ensure that I deliver quality results while
        continuously evolving as a software developer. Feel free to browse
        through my portfolio to see some of the projects I&#39;ve worked on. If
        you&#39;d like to collaborate or have any questions, don&#39;t hesitate
        to reach out!
      </p>
      <Link href="#">
        Download my Resume
      </Link>
    </section>
  );
};

export default About;
