import { UsefulLinks } from "./UsefulLinks";
import { SectionHeader } from "../lib/SectionHeader";
import { PageSection } from "../lib/SectionOutline";

const ContactSection = () => (

  <PageSection id="contact_section">
    <SectionHeader>
      <h1 className="invisible">Contact</h1>
      <h1 className="animatable">Contact</h1>
    </SectionHeader>
    <section className="
      h-[20vh] px-4 
      flex flex-col 
      items-center justify-center 
      gap-y-8 md:gap-y-16">
      <h3 className="text-3xl md:text-5xl">Links</h3>
      <UsefulLinks/>
    </section>
    <section>
      <div className="text-center md:text-xl flex flex-col">
        <p>Feel free to mail me at</p>
        <div className="group relative flex self-center">
          <a 
            tabIndex={0}
            className="focus:underline outline-none"
            href="mailto:retroalex1008@gmail.com"> retroalex1008@gmail.com

          </a>
          <div className="
              h-[1px] group-hover:animation-ToCHover left-0
              absolute bg-slate-950 dark:bg-slate-200 bottom-0"/>
        </div> 
         <br/>
        <p>I will be available for job offers after the end of June 2024.</p>
      </div>
    </section>
  </PageSection>

)


export default ContactSection;
