import { Window, WindowLink } from "@/components/window";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function IajesWebsiteRevamp({}) {
    return (
        <>
        <Header small>
            <h1>
                IAJES Website Revamp
            </h1>
        </Header>

        <main>
            <section className="flex">
                <p>
                    For my Senior Design Project at Santa Clara University, my team volunteered to revamp and improve the website of the <span class="highlight">International Association of Jesuit Engineering and Sciences (IAJES)</span> schools.
                    <br /><br />
                    In this project, I designed the website branding and styleguide, as well as many of the page layouts across the website. I developed accessible and flexible components created to be simple to use across development by any team member. Within the technical aspects of site development, I spearheaded the phase of database development and interaction with the web interface.
                </p>
                <p>
                    <strong>Role</strong>: Lead Front-end Developer and Full-stack Developer
                    <br/>
                    <strong>Tools</strong>: React, Tailwind CSS, Supabase, Figma, Adobe Illustrator
                    <br/>
                    <strong>Team</strong>: Nicolas Gibson (Full-stack Developer), Anisha Malani (Front-end Developer), Justin Fan (Back-end Developer)
                </p>
            </section>

            <section className="flex flex-col align-center">
                <Window>
                    <p>
                        IAJES saw a need for an online platform where IAJES could share their resources and support their international academic community in collaboration and connection.
                    </p>
                </Window>
            </section>

            <section>
                - Wireframes
                - Styleguide (include colors and fonts deciding here)
                - Components
                - Development
                - Database if i have time
            </section>
        </main>

        <Footer />
        </>
    )
}