import { UsefulLinks } from "../about/UsefulLinks";
import { SectionHeader } from "../lib/SectionHeader";
import { PageSection } from "../lib/SectionOutline";

const ContactSection = () => (

  <PageSection id="contact_section">
    <SectionHeader>
      Contact
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
      <p className="text-center md:text-xl">
        Feel free to mail me at 
        <br/> 
        <a 
          tabIndex={0}
          className="hover:underline focus:underline"
          href="mailto:retroalex1008@gmail.com"> retroalex1008@gmail.com
        </a>. <br/>
        I will be available for job offers after the end of June 2024.
      </p>
    </section>
  </PageSection>

)


export default ContactSection;
