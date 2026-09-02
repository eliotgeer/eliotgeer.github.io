import Link from "next/link";
import Script from "next/script";
import NineBox from "../../components/NineBox";
import ProjectCard from "../../components/ProjectCard";
import ScrollDirection from "../../components/ScrollDirection";

export const metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <>
      <ScrollDirection />
      <nav className="MenuBar SubPageNav">
        <NineBox id="home-nav">
          <Link href="/">Home</Link>
        </NineBox>
      </nav>
      <div className="TextBody SubPageBody">
        <h1 className="Title">Portfolio</h1>
        <NineBox id="cs-gamedev">
          <h1 className="Title">CS + Game Development</h1>
          <div className="ProjectList">
            <ProjectCard
              image="/assets/BugKidSequenceMini.gif"
              thumbnail="/assets/bugkidicon.jpg"
              title="Bug Kid Game Dev"
            >
              <p>© An ongoing solo game development and marketing project</p>
              <p>
                © Created in Godot3D using a pixel-perfect color-snapped light
                rendering pipeline
              </p>
              <div className="TweetRow" suppressHydrationWarning>
                <div className="TweetItem">
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      Early morning snooping 🥸🎑
                      <a href="https://x.com/hashtag/pixelart?src=hash&amp;ref_src=twsrc%5Etfw">
                        #pixelart
                      </a>{" "}
                      <a href="https://x.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">
                        #gamedev
                      </a>{" "}
                      <a href="https://x.com/hashtag/indiegame?src=hash&amp;ref_src=twsrc%5Etfw">
                        #indiegame
                      </a>{" "}
                      <a href="https://t.co/5UPykC3Oqn">
                        pic.twitter.com/5UPykC3Oqn
                      </a>
                    </p>
                    &mdash; Bug Kid (@BugKidGameDev){" "}
                    <a href="https://x.com/BugKidGameDev/status/2093635752093794776?ref_src=twsrc%5Etfw">
                      August 29, 2026
                    </a>
                  </blockquote>
                </div>
                <div className="TweetItem">
                  <blockquote className="twitter-tweet">
                    <p lang="qme" dir="ltr">
                      🌜🌞🌛
                      <a href="https://x.com/hashtag/pixelart?src=hash&amp;ref_src=twsrc%5Etfw">
                        #pixelart
                      </a>{" "}
                      <a href="https://x.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">
                        #gamedev
                      </a>{" "}
                      <a href="https://x.com/hashtag/indiegame?src=hash&amp;ref_src=twsrc%5Etfw">
                        #indiegame
                      </a>{" "}
                      <a href="https://t.co/lfhYM2WOwh">
                        pic.twitter.com/lfhYM2WOwh
                      </a>
                    </p>
                    &mdash; Bug Kid (@BugKidGameDev){" "}
                    <a href="https://x.com/BugKidGameDev/status/2088188842759389279?ref_src=twsrc%5Etfw">
                      August 14, 2026
                    </a>
                  </blockquote>
                </div>
                <p>© Generated 66k+ impressions within 3 weeks</p>
              </div>
              <Script
                src="https://platform.x.com/widgets.js"
                strategy="lazyOnload"
              />
            </ProjectCard>
            <ProjectCard image="/assets/GitHappens.png" title="Git Happens">
              <p>
                © Collaboratively practiced the software development lifecycle
                in a 4-person team, utilizing TypeScript w/ React and Java to
                develop a GitHub simulation web application as a potential
                future teaching tool
              </p>
              <p>
                © Implemented command parsing, handling, and and helped
                conceptualize high-level program architecture
              </p>
              <p>
                © Developed skills pertaining to frontend, backend, and
                cloud-based database integration with Google Firebase, as well
                as unit, end-to-end, and integration testing using Playwright
                and LLM-generated datasets
              </p>
            </ProjectCard>
            <ProjectCard
              image="/assets/BakeryBreakdownSequenceMini.gif"
              title="Bakery Breakdown"
            >
              <p>
                © Engineered a game engine with Java and JavaFX for use in
                multiple 2D game projects, supporting sprite-based graphics,
                collisions, tilemaps, window resizing, enemy AI decisionmaking,
                and customizable UI elements
              </p>
              <p>
                © Developed an interactive, time-based cooking simulation by
                applying custom game engine functionality
              </p>
            </ProjectCard>
            <ProjectCard
              image="/assets/LilyPadParkSequence.gif"
              title="LilyPad Park"
            >
              <div className="ItchEmbed">
                <iframe frameBorder="0" src="https://itch.io/embed/3877804">
                  <a href="https://eliotgeer.itch.io/lilypad-park">
                    LilyPad Park by Eliot Geer
                  </a>
                </iframe>
              </div>
              <p>
                © Conceptualized, designed, illustrated, and implemented an
                original 2D game world with a project partner in Godot
              </p>
            </ProjectCard>
          </div>
        </NineBox>
        <NineBox id="animation-film">
          <h1 className="Title">Animation + Film</h1>
          <div className="ProjectList">
            <ProjectCard
              image="/assets/EscapeARTistsSequence.gif"
              title="Escape ARTists"
            >
              <div className="VideoEmbed">
                <iframe
                  src="https://youtube.com/embed/m8iRvxH66Ck"
                  title="Escape ARTists"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p>
                © Collaboratively planned and produced an over 5-minute 3D
                animation short film Modeled, shaded, and lit a complex 3D
                museum scene in Autodesk Maya and edited the film in Adobe
                Premiere Pro
              </p>
            </ProjectCard>
            <ProjectCard
              image="/assets/DIRTYCOMPUTERSequence.gif"
              title="DIRTY COMPUTER"
            >
              <div className="VideoEmbed">
                <iframe
                  src="https://www.youtube.com/embed/mQ6FieaCeRE"
                  title="DIRTY COMPUTER"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p>
                © Created for MCM 0750G: Sonic Visions: The Art of Music Video
                Making as an editing study
              </p>
              <p>© Edited in Premiere Pro</p>
            </ProjectCard>
            <ProjectCard
              image="/assets/ZombieboySequence.gif"
              title="Zombieboy"
            >
              <div className="VideoEmbed">
                <iframe
                  src="https://youtube.com/embed/auWuIrwUrZU"
                  title="Zombieboy (Pixel Animation)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p>
                © Created for MCM 0750G: Sonic Visions: The Art of Music Video
                Making as an animation study
              </p>
              <p>© Animated in Aseprite and edited in Premiere Pro</p>
            </ProjectCard>
          </div>
        </NineBox>
        <NineBox id="research-marketing">
          <h1 className="Title">Marketing</h1>
          <div className="ProjectList">
            <ProjectCard
              image="/assets/musicalforum.jpeg"
              title="Brown Musical Forum"
            >
              <img
                className="DetailImage"
                src="/assets/Company.PNG"
                alt="Brown Musical Forum"
              />
              <p>© Promotional assets for Brown Musical Forum</p>
              <p>© Created in Adobe Illustrator and Autodesk Sketchbook</p>
            </ProjectCard>
          </div>
          <div className="ProjectList">
            <ProjectCard image="/assets/MITMH.PNG" title="MIT Mystery Hunt">
              <img
                className="DetailImage"
                src="/assets/MysteryHeist.JPG"
                alt="MIT Mystery Hunt"
              />
              <p>
                © Promotional logos, designs, and assets for MIT Mystery Hunt
              </p>
              <p>© Created in Autodesk Sketchbook</p>
            </ProjectCard>
          </div>
        </NineBox>
      </div>
    </>
  );
}
