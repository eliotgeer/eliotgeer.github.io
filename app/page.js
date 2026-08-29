import Link from "next/link";
import NineBox from "../components/NineBox";
import ScrollDirection from "../components/ScrollDirection";

export default function Home() {
  return (
    <>
      <ScrollDirection />
      <input
        type="checkbox"
        id="reduced-motion"
        className="ReducedMotionToggle"
      />
      <div className="BG BG1" />
      <div className="BG BG2" />
      <div className="BG BG3" />
      <div className="BG BG4" />
      <div className="Menu" />
      <nav className="MenuBar">
        <label htmlFor="reduced-motion" className="ReducedMotionLabel">
          Reduce Motion
        </label>
        <div className="MenuLinks">
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#skills">Skills / Experience</a>
          </p>
          <p>
            <a href="#portfolio">Portfolio</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </nav>
      <div className="PageGrid">
        <div className="Sidebar">
          <div className="Guy" />
        </div>
        <div className="FrontPage">
          <div className="Sun" />
          <div className="Clouds" />
          {/* <h1 className="Title">ELIOT GEER</h1> */}
          <div className="Logo" />
          <div className="TextBody">
            {/* <p>
              <Link href="/about/">About this site</Link>
            </p> */}
            <NineBox id="about">
              <h1 className="Title">About</h1>
              <div className="AboutContent">
                <div className="Headshot" />
                <div className="AboutText">
                  <p>
                    I am a senior at{" "}
                    <span className="Highlight">Brown University</span> studying
                    Computer Science (B.A.) and Modern Culture and Media (B.A.)
                    with interests in{" "}
                    <span className="Highlight">game development</span>,{" "}
                    <span className="Highlight">software engineering</span>,{" "}
                    <span className="Highlight">animation</span>, and{" "}
                    <span className="Highlight">marketing</span>!
                  </p>
                </div>
              </div>
            </NineBox>
            <NineBox id="skills">
              <h1 className="Title">Skills / Experience</h1>
              <div className="SkillsList">
                <p className="SkillRow">
                  <span className="SkillCategory">Technical:</span> Java,
                  JavaFX, Python, TypeScript w/ React, Godot (GD Script, GL
                  Shading Language), Lean
                </p>
                <p className="SkillRow">
                  <span className="SkillCategory">Artistic:</span> Adobe
                  Illustrator, Adobe Premiere Pro, Autodesk Sketchbook,
                  Autodesk Maya, ProCreate, Twine Harlowe
                </p>
                <p className="SkillRow">
                  <span className="SkillCategory">Organizational:</span>{" "}
                  Google Suite, R Studio, Overleaf (LaTeX)
                </p>
              </div>
            </NineBox>
            <NineBox id="portfolio">
              <h1 className="Title">Portfolio</h1>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <div className="SeeMore">
                <Link href="/portfolio/">See more...</Link>
              </div>
            </NineBox>
            <NineBox id="contact">
              <h1 className="Title">Contact</h1>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <div className="ContactLinks">
                <a
                  href="https://www.linkedin.com/in/eliot-geer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <div className="LinkedinIcon" />
                </a>
                <a href="mailto:eliot.geer@gmail.com" aria-label="Email">
                  <div className="MailIcon" />
                </a>
              </div>
            </NineBox>
          </div>
        </div>
      </div>
      <div className="MidGround">
        <div className="GuyMed" />
        <div className="Hill" />
      </div>
      <div className="PageEnd">
        <div className="View" />
      </div>
    </>
  );
}
