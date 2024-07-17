import { Birthday } from "./icons/Birthday";
import { Education } from "./icons/Education";
import { Work } from "./icons/Work";
import { data } from "../data";
import { getYearLabel } from "../utils/timeline";
import type { languages } from "../i18n/ui";

interface Props {
  lang: keyof typeof languages;
  year: number;
  position: "start" | "middle" | "end";
}

export const TimelineItem = ({ year, position, lang }: Props) => {
  const entry = data[lang][year];
  const category = entry[0].category;

  return (
    <li>
      {position !== "start" && <hr className="bg-primary" />}
      <div className="timeline-start timeline-box">
        {getYearLabel(year, lang)}
      </div>
      <div className="timeline-middle">
        {category === "General" ? (
          <Birthday />
        ) : category === "Education" ? (
          <Education />
        ) : (
          <Work />
        )}
      </div>
      {
        <div className="timeline-end timeline-box">
          {entry.map((d, i) => (
            <p key={i}>- {d.title}</p>
          ))}
        </div>
      }
      {position !== "end" && <hr className="bg-primary" />}
    </li>
  );
};
