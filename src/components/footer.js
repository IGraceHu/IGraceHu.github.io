import Window from "./window";
import { MailIcon, PhoneIcon, ArrowIcon } from "./icons";
import ArrowLink from "./arrowlink";

export default function Footer({}) {
    return (
        <footer className="pt-40">
            <div id="footer-back-container">
                <img id="footer-back-cloud-right" src="/assets/bg/cloud-1.svg" alt="" />
                <img id="footer-back-cloud-left" src="/assets/bg/cloud-2.svg" alt="" />
            </div>

            <Window url="https://www.igracehu.github.io/" className="mx-5 sm:mx-auto max-w-250 sm:w-[80vw]">
                <div id="footer-image-container" className="block lg:float-right m-6 mr-0 ml-auto lg:ml-8">
                    <img id="footer-image" src="/assets/portrait-half.png" alt="Isabelle's illustrated portrait." />
                </div>

                <h1>Let's create something beautiful together!</h1>
                <div id="footer-buttons" className="grid grid-cols-2 gap-4">
                    <a className="button" href="https://www.linkedin.com/in/isabellehu06/">
                        <img className="button-icon mr-2" src="/assets/icons/linkedin.png" alt="" /> LinkedIn <ArrowIcon direction="up-right" color="#2661CA" className="ml-auto" />
                    </a>
                    <a className="button" href="https://github.com/IGraceHu">
                        <img className="button-icon mr-2" src="/assets/icons/github.svg" alt="" />Github <ArrowIcon direction="up-right" color="#2661CA" className="ml-auto" />
                    </a>
                    <div className="button col-span-full"><MailIcon className="mr-2" color="#2661CA" /> igracehu@gmail.com</div>
                    <div className="button col-span-full"><PhoneIcon className="mr-2" color="#2661CA" /> +1(408)641-1066</div>
                </div>
                <p id="footer-links">
                    <br/>
                    * <ArrowLink href="/projects" color="#2661CA">Projects</ArrowLink>
                    <br />
                    * <ArrowLink href="/illustrations" color="#2661CA">Illustrations</ArrowLink>
                    <br />
                    * <ArrowLink href="/resume" color="#2661CA">Resume</ArrowLink>
                </p>
                <br/>
            </Window>

            <img id="footer-end" src="/assets/bg/footer-end.svg" alt="" />
        </footer>
    )
}