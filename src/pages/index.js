import { Window, WindowLink } from "@/components/window";
import DarkSection from "@/components/darksection";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>Isabelle Hu</title>
      </Head>

      <Header route="home">
          <h1>
            Hello World!
            <br/><br/>
            You can call me <span className="highlight">Isabelle Hu</span>.
          </h1>
      </Header>
      <main className="overflow-y-hidden">
        <section className="relative p-10 pt-20 pb-10">
          <div id="about-bg">
              <div id="about-bg-wrapper">
                  <img className="cloud-1" src="/assets/bg/cloud-1.svg" />
                  <img className="cloud-2" src="/assets/bg/cloud-2.svg" />
                  <img className="cloud-3" src="/assets/bg/cloud-3.svg" />
              </div>
          </div>

          <div className="relative w-full flex flex-col items-center z-1">
              <img className="w-140 pl-5" src="/assets/portrait-full.png" />
          </div>

          <div className="absolute top-30 w-full grid grid-cols-[300px_100px_300px] lg:grid-cols-[300px_300px_300px] justify-center hidden md:grid z-2">
              <div className="flex flex-col items-end">
                  <Window className="w-70 lg:w-80 mr-20">
                      <p>
                          <strong># Who I am:</strong>
                          <br />
                          I am a <span className="text-important">web designer</span> and a <span className="text-important">digital illustrator</span>  focused on creating stories that touch people's lives in creative and beautiful ways.
                      </p>
                  </Window>

                  <Window className="w-70 mt-45">
                      <p>
                          <strong># Where I'm at:</strong>
                          <br />
                          * <a href="https://www.linkedin.com/in/isabellehu06/" className="link"><span className="text-lightblue">LinkedIn</span></a>
                          <br/>
                          * <a href="https://github.com/IGraceHu" className="link"><span className="text-lightblue">Github</span></a>
                          <br/>
                          * <span className="text-lightblue">igracehu@gmail.com</span>
                      </p>
                  </Window>
              </div>
              <div></div>
              <div className="flex items-center">
                  <Window className="w-70 lg:w-80">
                      <p>
                          <strong># Where I'm from:</strong>
                          <br />
                          I am newly graduated in <span className="text-important">Web Design and Engineering</span> from SCU, and currently based in <span className="text-important">New York City</span>.
                      </p>
                  </Window>
              </div>
          </div>

          <div className="block md:hidden">
            <Window className="my-5">
                <p>
                    <strong># Who I am:</strong>
                    <br />
                    I am a <span className="text-important">web designer</span> and a <span className="text-important">digital illustrator</span>  focused on creating stories that touch people's lives in creative and beautiful ways.
                </p>
            </Window>
            <Window className="my-5">
                <p>
                    <strong># Where I'm from:</strong>
                    <br />
                    I am newly graduated in <span className="text-important">Web Design and Engineering</span> from SCU, and currently based in <span className="text-important">New York City</span>.
                </p>
            </Window>
            <Window className="my-5">
                <p>
                    <strong># Where I'm at:</strong>
                    <br />
                    * <a href="https://www.linkedin.com/in/isabellehu06/" className="link"><span className="text-lightblue">LinkedIn</span></a>
                    <br/>
                    * <a href="https://github.com/IGraceHu" className="link"><span className="text-lightblue">Github</span></a>
                    <br/>
                    * <span className="text-lightblue">igracehu@gmail.com</span>
                </p>
            </Window>
          </div>

        </section>

        <DarkSection id="projects" className="px-10 sm:px-30">
            <WindowLink href="/projects" className="w-100">
                <h2>Projects</h2>
            </WindowLink>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
                <WindowLink href="/projects/iajes-website-revamp" className="iajes-theme">
                    <h3>
                        <strong>IAJES Website Revamp</strong>
                    </h3>
                    <p>
                        Revamp, redesign, and upgrade of an international academic organization's website into a modular, dynamic, and interactive site using React.
                        <br/><br/>
                        <img className="project-window-img window-image" src="/assets/projects/iajes-card.png" />
                        <br/>
                        <span className="lighter-text">
                            Lead UI Designer and Full Stack Developer
                        </span>
                    </p>
                </WindowLink>

                <WindowLink href="/projects/rolf-website-redesign" className="rolf-theme">
                    <h3>
                        <strong>River of Life Foundation Website Redesign</strong>
                    </h3>
                    <p>
                        Redesign of a non-profit organization's website for a class assignment, with an emphasis on brand uniqueness and engagement.
                        <br/><br/>
                        <img className="project-window-img window-image" src="/assets/projects/rolf-card.png" />
                        <br/>
                        <span className="lighter-text">
                            UI Design | Figma
                        </span>
                    </p>
                </WindowLink>
            </div>
        </DarkSection>

        <section className="">
          <div className="px-10 sm:px-30">
            <WindowLink href="/illustrations" className="w-100">
              <h2>
                Artwork
              </h2>
            </WindowLink>
            <br/>
            <p>
              A collection of my digital illustrations.
            </p>
          </div>

          <div id="illustration-images" className="md:-mt-10 lg:-mt-20">
              <div>
                  <img id="folly" src="/images/folly.png" />
                  <img id="ocean" src="/images/empty_ocean.png" />
              </div>
              <div>
                  <img id="blooming" src="/images/blooming-fields.png" />
                  <img id="pldance" src="/images/render-dance-pl.png" />
              </div>
              <div>
                  <img id="wings" src="/images/wings.png" />
                  <img id="dome" src="/images/meditation.png" />
              </div>
              <div>
                  <img id="dorm" src="/images/render-blestie-dorm.png" />
                  <img id="garden" src="/images/garden.png" />
                  <img id="dance" src="/images/dance.png" />
              </div>
              <div>
                  <img id="glass" src="/images/stained_glass.png" />
                  <img id="clouds" src="/images/clouds.png" />
              </div>
          </div>
        </section>
      <div id="footer-pad"></div>
      </main>
      <Footer />
      </>
  );
}
