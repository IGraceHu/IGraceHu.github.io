import { Window, WindowLink } from "@/components/window";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from 'next/head';


export default function Projects() {
  return (
    <>
        <Head>
            <title>Isabelle Hu's Projects</title>
        </Head>

        <Header small url="Isabelle Hu" route="projects">
            <h1>
                My <span className="highlight">Projects</span>
            </h1>
        </Header>
        <main className="overflow-y-hidden">
            <section className="relative px-10 sm:px-30 pt-20 pb-10">
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
            </section>
        <div id="footer-pad"></div>
        </main>
        <Footer />
    </>
  );
}
