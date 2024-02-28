"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { BlurSpan } from "./BlurSpan";
import "@/app/lib/animations2.scss";

export const SectionScroller = () => {
  const sections = ["/", "/about", "/portfolio", "/contact"];
  const router = useRouter();

  const currentSection = usePathname();

  const [loading, setLoading] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [deltaY, setDeltaY] = useState(0);
  const [touchInitial, setTouchInitial] = useState(0);
  const currentSectionsIndex = sections.indexOf(currentSection);
  const [canScroll, setCanScroll] = useState(true);

  const handlePageChange = (nextPageRequest: boolean) => {
    setDeltaY(0);
    setCanScroll(false);
    //! buggy - don't add it: setTouchInitial(0);
    const currentIndex = currentSectionsIndex;
    const sectionLength = sections.length;

    if (!loading) {
      setLoading(true);

      const newSection = `${
        sections[
          nextPageRequest
            ? currentIndex > 0
              ? currentIndex - 1
              : currentIndex
            : currentIndex < sectionLength - 1
            ? currentIndex + 1
            : currentIndex
        ]
      }`;

      const pageSectionElement = document.querySelector(".page-section");

      if (
        window &&
        sections.includes(window.location.pathname) &&
        newSection !== currentSection
      ) {
        pageSectionElement &&
          (nextPageRequest
            ? pageSectionElement.classList.add("animation-page-section-up")
            : pageSectionElement.classList.add("animation-page-section-down"));

        setTimeout(() => {
          router.replace(newSection, {
            scroll: false,
          });
        }, 400);
      }

      setTimeout(() => {
        setLoading(false);
      }, 200);

      setTimeout(() => {
        setCanScroll(true);
      }, 1000);
    }
  };

  const notPortfolioPreview = sections.includes(currentSection);

  useEffect(() => {
    if (hasMounted && notPortfolioPreview && canScroll) {
      onwheel = (wheelEvent) => {
        const tempDeltaY = wheelEvent.deltaY;
        const newDeltaY =
          tempDeltaY > 0
            ? Math.min(wheelEvent.deltaY, 20)
            : Math.max(wheelEvent.deltaY, -20);
        console.log(newDeltaY, deltaY);
        setDeltaY((current) => {
          if (newDeltaY > 0 && deltaY < 0) return 0;
          if (newDeltaY < 0 && deltaY > 0) return 0;
          return current + newDeltaY;
        });
        if (Math.abs(deltaY) > 400) {
          handlePageChange(deltaY < 0);
        }
        setTimeout(() => {
          setDeltaY((currentValue) => {
            if (currentValue == deltaY + newDeltaY) {
              return 0;
            }
            return currentValue;
          });
        }, 300);
      };

      if (window && "ontouchstart" in window) {
        ontouchstart = (touchStartEvent) => {
          setTouchInitial(touchStartEvent.touches[0].pageY);
        };
        ontouchmove = (touchMoveEvent) => {
          const deltaTouch = -(touchMoveEvent.touches[0].pageY - touchInitial);
          setDeltaY((currentValue) => {
            if (Math.abs(currentValue) > Math.abs(deltaTouch)) {
              setTouchInitial(touchMoveEvent.touches[0].pageY);
            }
            return deltaTouch;
          });

          if (Math.abs(deltaTouch) > 200) {
            handlePageChange(deltaTouch < 0);
          }
        };
        ontouchend = () => {
          setDeltaY(0);
          setTouchInitial(0);
        };
      }
    } else {
      setHasMounted(true);
      setDeltaY(0);
    }
  });

  const nextSection = sections[currentSectionsIndex + 1];
  const prevSection = sections[currentSectionsIndex - 1];

  return (
    <>
      {notPortfolioPreview && (
        <aside className="fixed right-2 top-[40vh] overflow-visible">
          <ul className="flex flex-col gap-y-2 animation-sectionScroller overflow-visible">
            {sections.map((section, key) => (
              <Link
                aria-label={
                  "Jump to the " +
                  (section == "/" ? "table of contents" : section.slice(1)) +
                  " section"
                }
                tabIndex={0}
                className="group outline-none"
                key={`${section}_${key}`}
                replace={true}
                href={`${section}`}
              >
                <li
                  data-current-section={`${section}` == currentSection}
                  className="
                  dark:bg-slate-200 bg-slate-950
                  dark:border-slate-200 border-slate-950
                  group-focus:bg-amber-600
                  dark:group-focus:bg-amber-800
                  dark:group-hover:bg-blue-600
                  group-hover:bg-blue-400
                  data-[current-section=true]:bg-amber-400
                  dark:data-[current-section=true]:bg-amber-600
                    rounded-full w-2 h-2 border "
                />
              </Link>
            ))}
          </ul>
        </aside>
      )}

      <aside
        className="
      animation-arrow
      fixed
      bottom-0 
      flex w-full 
      justify-between 
      text-3xl md:text-5xl
      px-4 pb-2"
      >
        <SlideCurve deltaY={deltaY} notPortfolioPreview={notPortfolioPreview}/>

        {prevSection ? (
          <Link
            className="relative group outline-none overflow-visible"
            tabIndex={0}
            href={prevSection}
          >
            <BlurSpan> &lt; </BlurSpan>
            &lt;
          </Link>
        ) : (
          <div></div>
        )}

        {nextSection ? (
          currentSectionsIndex === -1 ? (
            <div className="w-full flex justify-center text-lg md:text-3xl">
              <Link
                tabIndex={0}
                className="group outline-none overflow-visible relative"
                href={"/portfolio"}
              >
                <BlurSpan>Portfolio</BlurSpan>
                Portfolio
              </Link>
            </div>
          ) : (
            <Link
              tabIndex={0}
              className="relative group outline-none overflow-visible"
              href={nextSection}
            >
              <BlurSpan> &gt; </BlurSpan>
              &gt;
            </Link>
          )
        ) : (
          <div></div>
        )}
      </aside>
    </>
  );
};

const SlideCurve = ({ deltaY, notPortfolioPreview }: { deltaY: number, notPortfolioPreview: boolean }) => {
  const progress = Math.max(Math.abs(deltaY) / 200, 0.01);
  const borderRadius = 64 / (progress * progress);

  return (
    <div
      className="fixed dark:bg-slate-600 bg-slate-400 w-screen left-0 z-0"
      style={
        {
          opacity: 0.4,
          borderRadius:
            deltaY > 0
              ? `${borderRadius}px ${borderRadius}px 0px 0px`
              : `0px 0px ${borderRadius}px ${borderRadius}px`,
          width: `100vw`,
          height: `10vh`,
          top: deltaY < 0 ? (-24 * 1) / progress : undefined,
          bottom: deltaY < 0 ? undefined : (-24 * 1) / progress,
          display: deltaY == 0 || !notPortfolioPreview  ? "none" : "inline",
        } //$
      }
    ></div>
  );
};
