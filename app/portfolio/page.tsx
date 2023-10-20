import { SectionHeader } from "../lib/SectionHeader";
import { PageSection } from "../lib/SectionOutline";
import { Showcase } from "./Showcase";

export const PortfolioSection = () => (

  <PageSection
      id="portfolio_section">
    <SectionHeader>
        <h1 className="invisible"> Portfolio </h1>
        <h1 className="animatable"> Portfolio </h1>
    </SectionHeader>
    <Showcase/>
  </PageSection>

)

export default PortfolioSection;