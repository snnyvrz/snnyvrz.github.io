import { TimelineItem } from "./TimelineItem";
import { years } from "../timelineStore";
import { useStore } from "@nanostores/react";
import type { languages } from "../i18n/ui";

export const Timeline = (props: { lang: keyof typeof languages }) => {
  const $years = useStore(years);

  return (
    <ul className="timeline timeline-vertical">
      {$years.map((year, idx, arr) => {
        return (
          <TimelineItem
            lang={props.lang}
            year={year}
            position={
              idx === 0 ? "start" : idx === arr.length - 1 ? "end" : "middle"
            }
            key={idx}
          />
        );
      })}
    </ul>
  );
};
