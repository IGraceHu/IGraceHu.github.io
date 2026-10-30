import { Window } from "@/components/window";
import { WindowAccordion, WindowHeader } from "@/components/accordion";
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { DarkSectionStart } from "@/components/darksection";
import Head from 'next/head';


export default function IajesWebsiteRevamp({}) {
    const wireframesList = [
        ["Landing", "1-landing.png"],
        ["About", "2-about.png"],
        ["Organizational Structure", "3-organizational-structure.png"],
        ["Profile", "4-profile.png"],
        ["Profile Edit", "4.1-profile-edit.png"],
        ["Login", "5-login.png"],
        ["Sign Up", "6-signup.png"],
        ["Search", "8-search.png"],
        ["Task Forces", "9-task-forces.png"],
        ["Task Force", "10-task-force.png"],
        ["Task Force Edit", "10.1-tf-edit-1.png"],
        ["Task Force Edit", "10.2-tf-edit-2.png"],
        ["Regions", "7-regions.png"],
        ["Regional Meetings", "11-regional-meetings.png"],
        ["Regional Meeting", "12-regional-meeting.png"],
        ["Biennial Meetings", "13-biennial-meetings.png"],
        ["Biennial Meeting", "14-biennial-meeting.png"],
        ["Webinars", "15-webinars.png"],
        ["Webinar", "16-webinar.png"],
        ["Newsletter", "17-newsletter.png"],
        ["Newsletter Drafts", "18-newsletter-drafts.png"],
        ["Newsletter Edit", "19-newsletter-edit.png"]
    ]
    return (
        <>
        <Head>
            <title>IAJES Website Revamp</title>
        </Head>

        <Header small url="Isabelle Hu" route="projects">
            <h1>
                IAJES Website Revamp
            </h1>
        </Header>

        <main className="overflow-y-hidden">
            <DarkSectionStart className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 md:px-20 lg:px-30 xl:px-60">
                <p className="">
                    For my Senior Design Project at Santa Clara University, my team volunteered to revamp and improve the website of the <span className="highlight">International Association of Jesuit Engineering and Sciences (IAJES)</span> schools.
                    <br /><br />
                    In this project, I designed the website branding and styleguide, as well as many of the page layouts across the website. I developed accessible and flexible components created to be simple to use across development by any team member. Within the technical aspects of site development, I spearheaded the phase of database development and interaction with the web interface.
                </p>
                <p className="">
                    <strong>Role</strong>:
                    <br />
                    Lead Front-end Developer and Full-stack Developer
                    <br /><br />
                    <strong>Tools</strong>:
                    <br />
                    React, Tailwind CSS, Supabase, Figma, Adobe Illustrator
                    <br /><br />
                    <strong>Team</strong>:
                    <br />
                    Isabelle Hu
                    <br />
                    Nicolas Gibson (Full-stack Developer)
                    <br />
                    Anisha Malani (Front-end Developer)
                    <br />
                    Justin Fan (Back-end Developer)
                    <br /><br />
                    <a href="https://github.com/IGraceHu/iajes-website-redesign" target="_blank"><img className="w-10 brightness-650 hover:opacity-60 hover:cursor-point duration-200" src="/assets/icons/github.svg" /></a>
                </p>

                <div className="sm:col-span-2">
                    <Window className="max-w-170 mx-10 md:mx-auto my-20">
                    <div>
                        <img className="mx-auto my-5 w-50" src={`/assets/projects/iajes/logo-iajes.svg`} />
                    </div>
                    <p>
                        IAJES saw a need for an online platform where IAJES could share their resources and support their international academic community in collaboration and connection.
                    </p>
                </Window>
                </div>
            </DarkSectionStart>

            <section className="mx-10 md:mx-30 py-10">
                
                <div className="window-container m-5">
                    <WindowAccordion className="sm:mr-40 lg:mr-80">
                        <AccordionSummary>
                            <WindowHeader url="IAJES" style={{background:'#2662cabd'}}></WindowHeader>
                            <h3 className="summary-text">On Wireframes</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>Our wireframes of many of the pages IAJES wanted in the new site created in Figma.</p>
                            <div className="flex overflow-x-scroll">
                                {wireframesList.map((wireframe, idx) => {return (<div key={idx} className="shrink-0 w-full max-w-150 p-5">
                                    <p><strong>{wireframe[0]}</strong></p>
                                    <img src={`/assets/projects/iajes/wireframes/${wireframe[1]}`} />
                                </div>)})}
                            </div>
                        </AccordionDetails>
                    </WindowAccordion>
                </div>
                <div className="window-container m-5">
                    <WindowAccordion className="sm:ml-10 lg:ml-20 sm:mr-30 lg:mr-60">
                        <AccordionSummary>
                            <WindowHeader url="IAJES" style={{background:'#4582E6bd'}}></WindowHeader>
                            <h3 className="summary-text">On Visual Design</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                The styleguide was where IAJES's branding first came to life. The design of the site overall branched off of the core features of IAJES's logo: curved lines and gradient colors. Here, I defined the styles and layout across the website based off of those features, for ease of reference and to maintain consistency on design throughout the project.
                            </p>
                            <div className="flex items-start overflow-x-scroll">
                                <img className="block w-200 lg:w-250 shrink-0" src={`/assets/projects/iajes/styleguide/styleguide-1.png`} />
                                <img className="block w-200 lg:w-250 shrink-0 pt-10" src={`/assets/projects/iajes/styleguide/styleguide-2.png`} />
                                <img className="block w-200 lg:w-250 shrink-0 pt-10" src={`/assets/projects/iajes/styleguide/styleguide-3.png`} />
                                <img className="block w-200 lg:w-250 shrink-0 pt-9" src={`/assets/projects/iajes/styleguide/styleguide-4.png`} />
                            </div>
                        </AccordionDetails>
                    </WindowAccordion>
                </div>
                <div className="window-container m-5">
                    <WindowAccordion className="sm:ml-20 lg:ml-40 sm:mr-20 lg:mr-40">
                        <AccordionSummary>
                            <WindowHeader url="IAJES" style={{background: '#539AEAbd'}}></WindowHeader>
                            <h3 className="summary-text">On React Components</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Along with the Styleguide, I created React components to reuse complicated functions. These functional components include:
                            </p>
                            <ul className="text-important">
                                <li>* Menu/Navigation Bar</li>
                                <li>* Popup & Popup Form</li>
                                <li>* Multi-select</li>
                                <li>* Pagination</li>
                                <li>* Markdown Text Editor</li>
                            </ul>
                            <p>
                                For all components, not only is user interactivity is the focal point, but <span className="text-important">developer implementation</span> is also a concern because both components will be widely used across development. Thus, the number one priority of these components is functionality, of course, and the number two priority is that the component would be enjoyable and easy to use.
                            </p>

                            <h4>Popups</h4>
                            <img className="w-150 xl:float-right ml-auto xl:ml-5 mb-5 window-image" src="/assets/projects/iajes/popup-example.gif" />
                            <p>
                                The most prevalent component was the <span className="text-important">Popup</span> and it's more functional sibling, <span className="text-important">PopupForm</span>. All editable pages make use of <span className="text-important">PopupForms</span> to create and update information about the site.
                                <br/><br/>
                                I created the Popups to have a fade-in/fade-out transition to ease users into the new sight. Additionally, all other site interaction functionality is disabled within a popup until the window is dismissed. 
                                For developers, popups can have a number of buttons each executing a given function. PopupForms also have a built-in validation function that runs upon form submission.
                            </p>
                            
                            
                        </AccordionDetails>
                    </WindowAccordion>
                </div>
                <div className="window-container m-5">
                    <WindowAccordion className="sm:ml-30 lg:ml-60 sm:mr-10 lg:mr-20">
                        <AccordionSummary>
                            <WindowHeader url="IAJES" style={{background: '#A8B0ECbd'}}></WindowHeader>
                            <h3 className="summary-text">On Development</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Our group chose to build with React, React Router, and TailwindCSS. On the front-end side, I implemented the components and layouts previously built to create each of the pages IAJES needed. Out of the 20 unique pages, I fully developed 12 pages of them, from designing the flow of the page to hooking it up to the back-end database communication.
                                <br/><br/>
                                With React massively simplifying rendering dynamic elements of the site, much of front-end development involved form validation and database communication. My favorite part I worked on involved user session detection. Every page needed an authentication state subscription because a number of pages would render differently depending on user roles. Originally we only planned to have two roles, <span className="text-important">member</span> and <span className="text-important">admin</span>, but later on our clients asked for multiple roles with more specific permissions. I realized that this would complicate the auth state check from page to page, so I isolated the auth state check to its own function and created several variations to use in development.
                            </p>
                            <br/>
                            <ul>
                                <li>* checkCurrentAuth() <span className="text-important">// Checks if the current user has admin permissions</span></li>
                                <li>* checkCurrentAuthAndId() <span className="text-important">// Checks if the current user has admin permissions and saves the user's ID</span></li>
                                <li>* currentHasPermissions()<span className="text-important">// Checks if a given user has admin permissions</span></li>
                                <li>* getUserRoles() <span className="text-important">// Gets a list of a given user's roles</span></li>
                            </ul>
                            <br/>
                            <p>
                                These functions simplified the process of checking for permissions across the project, and rendered the code more readable.
                            </p>
                        </AccordionDetails>
                    </WindowAccordion>
                </div>
                <div className="window-container m-5">
                    <WindowAccordion className="sm:ml-40 lg:ml-80">
                        <AccordionSummary>
                            <WindowHeader url="IAJES" style={{background: '#ffe1f298'}}></WindowHeader>
                            <h3 className="summary-text">On Database</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <img className="w-80 xl:float-right ml-10" src="/assets/projects/iajes/database-table.svg" />
                            <p>
                                While we did not intend for me to take on the task of setting up the database tables, time limitations of the other team members resulted with the task delegated to me. <span className="highlight">Supabase</span> was our choice for hosting the website database, since it was a database system that IAJES's engineers were also familiar with. We only needed a server for authentication, database, and storage. Supabase provides all three in a form that is simple and familiar to our team and our clients.
                                <br/><br/>
                                I learned how to create Postgres Row Level Security (RLS) policies to allow users to safely and securely access information from the database through the website. While I was initially unfamiliar with both Postgres and RLS, I knew enough about SQL to create basic policies for the tables. Supabase also had templates that I could get started with, and for the most part, I just needed four policies for every table: Create, Select, Update, and Delete.
                                <br/><br/>
                                Though not my usual area of focus, I found learning and working on the back-end to be worthwhile, and it gave me more insight to how the developed front-end connects to the back-end.
                            </p>
                            
                            
                        </AccordionDetails>
                    </WindowAccordion>
                </div>
            </section>

            <section>
                <Window className="max-w-170 mx-10 md:mx-auto my-20 text-center">
                    <br/>
                    <h3>
                        <a className="link" href="iajes.org">Visit the IAJES site!</a>
                    </h3>
                    <br/>
                </Window>
            </section>
        </main>

        <Footer />
        </>
    )
}