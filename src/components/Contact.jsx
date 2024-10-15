import Icons from "./Icons"

const Contact = () => {
  return (
    <section className="contact" id="contact">
     <h2>Contact</h2>
     <p>Let&apos;s connect and create together.</p>
     <div className="socials-container">
        <a href="linkedin.com/in/weston-rwigema-3029082b3">
            <Icons.LinkedIn />
        </a>
        <a href="https://github.com/WeStOn2000">
           <Icons.Github />
        </a>
     </div>
    </section>
  )
}

export default Contact