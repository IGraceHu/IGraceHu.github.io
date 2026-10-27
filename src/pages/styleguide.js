import { Window, WindowLink } from "@/components/window";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MailIcon, PhoneIcon, ArrowIcon, ChevronIcon } from "@/components/icons";
import { FunctionAccordion, WindowAccordion, WindowHeader } from '@/components/accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export default function Projects() {
  return (
    <>
      <Header small url="Isabelle Hu">
        <h1>
            Styleguide
        </h1>
      </Header>
      <main>
        <section className="relative px-10 sm:px-30 pt-20 pb-10">
            <Window className="w-70 mt-45">
                <p>
                    WindDow
                </p>
            </Window>
            <div>
                <FunctionAccordion className="accordion">
                    <AccordionSummary
                        expandIcon={<ChevronIcon size="24" color="#A8B0EC" />}
                    ><p className="summary-text">Function Accordion</p></AccordionSummary>
                    <AccordionDetails>
                        <p>
                            Deebtails
                        </p>
                    </AccordionDetails>
                </FunctionAccordion>
            </div>

            <div className="window-container">
                <WindowAccordion className="accordion">
                    <AccordionSummary>
                        <WindowHeader url="woag url" />
                        <p className="summary-text">Window Accordion</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                            Deebtails
                        </p>
                    </AccordionDetails>
                </WindowAccordion>
            </div>
        </section>
      <div id="footer-pad"></div>
      </main>
      <Footer />
      </>
  );
}
