import Window from "./window";
import Link from 'next/link';

export default function Header({children, small = false, url, route}) {
  return (
    <>
        <div id="header" className={small ? "small" : ''}>
            <div id="header-clouds">
                <img className="header-cloud-left" src="/assets/bg/header-cloud-left.svg" />
                <img className="header-cloud-right" src="/assets/bg/header-cloud-right.svg" />
            </div>
            <div id="header-logo-wrapper">
                <img id="header-logo" src="/assets/logo-light.svg" />
            </div>
            <div id="header-window-wrapper">
                <Window url={url} className="mx-10 min-w-100">
                    {children}
                </Window>
            </div>
        </div>
        <nav id="nav">
            <div id="nav-left">
                <Link href="/" className={"link" + (route == "home" ? " active" : "")}>Home</Link>
                <Link href="/projects" className={"link" + (route == "projects" ? " active" : "")}>Projects</Link>
            </div>
            <img id="nav-img" src="/assets/logo-small.svg" />
            <div id="nav-right">
                <Link href="/illustrations" className={"link" + (route == "illustrations" ? " active" : "")}>Artworks</Link>
                <Link href="/resume" className={"link" + (route == "resume" ? " active" : "")}>Resume</Link>
            </div>
        </nav>
    </>
  );
}