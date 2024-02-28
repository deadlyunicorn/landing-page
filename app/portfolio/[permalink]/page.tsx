import { SectionHeader } from "@/app/lib/SectionHeader";
import { PageSection } from "@/app/lib/SectionOutline";
import { ImageScroller } from "./ImageScroller";
import { DescriptionModal } from "./DescriptionModal";
import { revalidatePath } from "next/cache";
import { ImageWrapForModal } from "@/app/lib/ImageComponentWithModal";
import Image from "next/image";

const ShowcaseDisplay = async ({
  params,
}: {
  params: {
    permalink: string;
  };
}) => {
  const showcaseItem = await fetch(
    `${process.env.SERVER_URL}/api/portfolio-items/${params.permalink}`,
    {
      next: {
        revalidate: 60 * 5, //seconds  // IDK - 24 hours doesn't seem to work..
      },
    }
  ).then(async (res) => (res.ok ? await res.json() : null));

  if (!showcaseItem) {
    revalidatePath(`/portfolio/${params.permalink}`);
  }
  // const showcaseItem:showcaseItem =
  //   {
  //     title: "CoolItem",
  //     thumbnail: "/deadlyunicorn.png",
  //     shortDescription: "A mock social app",
  //     fullDescription: "This is a mock social app. You can add friends etc1, etc2, etc3",
  //     images: [
  //       "/deadlyunicorn.png",
  //       "/deadlyunicorn.png",
  //       "/deadlyunicorn.png",
  //       "/deadlyunicorn.png",
  //     ]
  //   }

  return showcaseItem ? (
    <PageSection id={showcaseItem.title}>
      <div
        className="
        mt-[48px]
      relative animation-header overflow-visible
      text-4xl md:text-7xl
      max-w-4xl place-self-center w-full
      justify-center
      flex flex-col items-center"
      >
        <div className="flex relative overflow-visible">
          <h1 className="invisible"> {showcaseItem.title} </h1>
          <h1 className="animatable"> {showcaseItem.title} </h1>
        </div>
      </div>
      <section
        className="
            relative overflow-y-auto h-[70vh]
            sm:mb-[8vh] mb-[12vh] max-w-4xl
            place-self-center w-full"
      >
        <div className="overflow-x-auto w-full flex gap-x-8 mb-4 items-center justify-between">
            {showcaseItem.images.map((image: any, index: number) => (
              <div
                key={`${index}_image`}
                className="animation-showcase-image-appearance flex-shrink-0"
              >
                <ImageWrapForModal imageURL={image}>
                  <img
                    className="aspect-auto max-h-[360px] max-w-[80vw] object-contain rounded-lg"
                    src={image}
                    alt={`No.${+index + 1} image of this project's showcase`}
                  />
                </ImageWrapForModal>
              </div>
            ))}
        </div>
        {/* {showcaseItem.images.length > 0 && (
          <ImageScroller images={showcaseItem.images} />
        )} */}
        <h3 className="text-2xl md:text-5xl text-center animation-about-item mb-4">
          About
        </h3>
        <div className="flex justify-center items-center overflow-visible">
          <p className="text-lg md:text-3xl text-center animation-short-description">
            {showcaseItem.shortDescription}
          </p>
          &nbsp;
        </div>
        <div
          id="full_portfolio_item_description"
          className="overflow-visible sm:text-lg animation-learn-more"
          dangerouslySetInnerHTML={{ __html: showcaseItem.fullDescription }}
        />
      </section>
    </PageSection>
  ) : (
    <PageSection id="wrong_page">
      <div
        className="
              flex h-full 
              items-center justify-center 
              text-lg md:text-5xl"
      >
        <p className="animation-description">
          {" "}
          There was an error getting the showcase.{" "}
        </p>
      </div>
    </PageSection>
  );
};

export default ShowcaseDisplay;
