import { SectionScroller } from "./lib/SectionScroller";
import { AboutSection } from "./sections/about/AboutSection";
import { ContactSection } from "./sections/contact/ContactSection";
import { PortfolioSection } from "./sections/portfolio/PortfolioSection";
import { TableOfContents } from "./sections/TableOfContents";

const Home = () => {
  return (
    <div className="px-4">
      <TableOfContents/>
      <AboutSection/>
      <PortfolioSection/>
      <ContactSection/>

    </div>
  )
}


export default Home;