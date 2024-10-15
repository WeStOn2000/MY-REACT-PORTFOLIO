import profileImage from "../assets/profile.jpg"
import Link from "./Link"

export const Hero = () => {
  return (
    <section className="hero divider">
        <div className="image">
            <img src={profileImage} alt="Photo of Weston"/>
        </div>
        <div>
        <h1>WESTON RWIGEMA</h1>
        <p>FULL-STACK WEB DEVELOPER</p>
        <p>CANADA</p>
        <Link href="https://github.com/WeStOn2000">Check Out My Work</Link>
        </div>
    </section>
  )
}
