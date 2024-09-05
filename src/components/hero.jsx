import profileImage from"../assets/chuck.png"
const hero = () => {
  return (
    <div>
      <section className="hero divider">
        <div className='image'>
            <img src={profileImage} alt="Photo of Weston"/>
        </div>
        <div>
            <h1>Weston Rwigema</h1>
            <p>Full Stack Developer</p>
            <p>Ottawa, Canada</p>
            <a href="#projects" className="btn">Check out my Work!</a>
        </div>
      </section>
    </div>
  )
}

export default hero
