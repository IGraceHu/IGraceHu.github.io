import Window from "./window";

export default function Header({children, small = false}) {
  return (
    <>
        <div id="header">
            <div id="header-clouds">
                <img className="header-cloud-left" src="/assets/bg/header-cloud-left.svg" />
                <img className="header-cloud-right" src="/assets/bg/header-cloud-right.svg" />
            </div>
            <div id="header-logo-wrapper">
                <img id="header-logo" src="/assets/logo-light.svg" />
            </div>
            <div id="header-window-wrapper">
                <Window>
                    {children}
                </Window>
            </div>
        </div>
        <nav id="nav">
            <div id="nav-left">
                <a href="/" className="link">Home</a>
                <a href="/projects" className="link">Projects</a>
            </div>
            <img id="nav-img" src="/assets/logo-small.svg" />
            <div id="nav-right">
                <a href="/Illustrations" className="link">Artwork</a>
                <a href="/Resume" className="link">Resume</a>
            </div>
        </nav>
    </>
  );
}