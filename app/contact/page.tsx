import { UsefulLinks } from "./UsefulLinks";
import { SectionHeader } from "../lib/SectionHeader";
import { PageSection } from "../lib/SectionOutline";
import "@/app/contact/contact-animations.scss"

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
      gap-y-8 md:gap-y-16
      animation-slide-from-right
      ">
      <h3 className="text-3xl md:text-5xl ">Links</h3>
      <UsefulLinks/>
    </section>
    <section>
      <div className="text-center md:text-xl flex flex-col">
        <p className="animation-slide-from-left">Feel free to mail me at</p>
        <div className="group relative flex self-center overflow-visible">
          <a 
            tabIndex={0}
            className="outline-none peer animation-slide-from-left"
            href="mailto:retroalex1008@gmail.com"> retroalex1008@gmail.com

          </a>
          <div className="
              group-hover:animation-ToCHover peer-focus:animation-ToCHover
              h-[1px] left-0
              absolute bg-slate-950 dark:bg-slate-200 bottom-0"/>
        </div> 
        <br/>
        <p className="animation-slide-from-down">I will be available for job offers after the end of June 2024.</p>
      </div>
    </section>
  </PageSection>

)


export default ContactSection;
