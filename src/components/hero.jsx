import profileImage from"../assets/chuck.png"
const hero = () => {
  return (
    <div>
      <section className="hero divider">
        <div className='image'>
            <img drc={profileImage} alt="Photo of Weston"/>
        </div>
      </section>
    </div>
  )
}

export default hero
