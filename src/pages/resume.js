import { MailIcon, PhoneIcon, ArrowIcon, ChevronIcon } from "@/components/icons";
import { Window } from "@/components/window";
import Header from "@/components/header";
import { FunctionAccordion } from '@/components/accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


export default function Resume({}) {
    return (
        <>
        <Header small>
            <h1>
                My <span className="highlight">Resume</span>
            </h1>
        </Header>

        <main>
            <section className="relative px-10 lg:px-30 py-20">
                <Window>
                    <div id="footer-image-container" className="block md:float-left m-6 ml-auto md:ml-0">
                        <img id="footer-image" src="/assets/portrait-half.png" alt="Isabelle's illustrated portrait." />
                    </div>

                    <h1>Isabelle Hu</h1>
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
                    <br/>
                    <p>
                        As a newly graduated web design student from SCU, I have an intuitive and practiced proficiency in UI/UX design, front-end development, and software engineering. 
                        <br /> <br />
                        I'm deeply passionate about the intersection of application development, graphic design, and user interaction in digital and physical spaces. I aspire to bring my detail-orientation, diligent work ethic, and empathy for teammates and clients to upcoming roles.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="lg:col-span-2">
                            <h2>Education</h2>
                            <p className="text-purple">// Fall 2023 - Spring 2026</p>
                            <strong>Santa Clara University</strong> | Santa Clara, California
                            <p>
                                Bachelor's of Science in Web Design and Engineering Major | GPA: 3.8
                                <br />
                                Computer Science Minor
                            </p>

                            <br />

                            <p className="text-purple">// Fall 2021 - Spring 2023</p>
                            <strong>University of Hawai'i at Manoa</strong> | Honolulu, Hawai'i
                            <p>Computer Science Major | GPA: 3.9</p>
                        </div>

                        <div>
                            <h2>Professional Experience</h2>
                            <div>
                                <p className="text-purple">// October 2024 - April 2025</p>
                                <FunctionAccordion className="accordion">
                                    <AccordionSummary
                                        expandIcon={<ChevronIcon size="24" color="#A8B0EC" />}
                                    ><p className="summary-text"><strong>IT Web Developer</strong> | Wus Printed Circuit Co., Ltd</p></AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            <li>Developed 8 new supporting pages for the internal administration application for usability and productivity.</li>
                                            <li>Upgraded outdated administration functions for the migration to a new administration application, increasingclarity and efficiency for user experience and documentation for future development.</li>
                                            <li>Communicated with multiple teams for feedback on administration functions to improve user experience.</li>
                                        </ul>
                                    </AccordionDetails>
                                </FunctionAccordion>
                            </div>
                            <br/>
                            <div>
                                <p className="text-purple">// July 2021 - March 2024</p>
                                <FunctionAccordion className="accordion">
                                    <AccordionSummary
                                        expandIcon={<ChevronIcon size="24" color="#A8B0EC" />}
                                    ><p className="summary-text"><strong>Software Engineer Intern</strong> | eWorld Enterprise Solutions</p></AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            <li>Developed conversational user interfaces in Google Dialogflow ES and CX for the Hawai'i Department of Health for healthcare aid and information accessibility during COVID-19.</li>
                                            <li>Created an external tool to enable and aid Dialogflow version control, team collaboration, and iterative design.</li>
                                            <li>Mentored new BAs and developers on the team on ServiceNow basics and internal functions.</li>
                                        </ul>
                                    </AccordionDetails>
                                </FunctionAccordion>
                            </div>
                        </div>

                        <div>
                            <h2>Skills</h2>
                            <strong>Programming</strong>
                            <p>HTML, CSS, Javascript, Python, C/C++, Java, PHP</p>

                            <br />

                            <strong>Frameworks</strong>
                            <p>React, Bootstrap, Vue.js, Tailwind CSS, Flutter, Material UI</p>

                            <br />
                        
                            <strong>Technologies</strong>
                            <p>VSCode, Git, Microsoft Office, Figma, Adobe Photoshop, Adobe Illustrator, Procreate</p>
                        </div>
                    </div>

                    <br />

                </Window>
            </section>
        </main>
        </>
    )
}