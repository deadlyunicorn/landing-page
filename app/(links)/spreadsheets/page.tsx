import { PageSection } from "@/app/lib/SectionOutline";
import { ToCItem } from "@/app/lib/ToCItem";

const SpreadsheetsRedirect = () => {
  return (
    <PageSection id="spreadsheets_redirect">
      <div
        className="h-full w-full flex flex-col
                items-center justify-center text-center"
      >
        <p>You might want to use the <u>web</u> version of the Spreadsheets.</p>
        <p>
          It is recommended to use a PC for this.
        </p>
        <ul>
          <ToCItem>
            <a
              className="dark:text-green-400 text-green-600"
              target="_blank"
              href="https://docs.google.com/spreadsheets/u/0/create"
            >
              <span className="text-lg">Get me to Spreedsheets</span>
            </a>
          </ToCItem>
        </ul>
      </div>
    </PageSection>
  );
};

export default SpreadsheetsRedirect;
