import { data } from "../data";
import type { languages } from "../i18n/ui";

export const getYears = () => {
  const years: number[] = [];
  const thisYear = new Date().getFullYear();
  for (let i = 1989; i <= thisYear; i++) {
    if (data.en[i]) {
      years.push(i);
    }
  }
  return years;
};

export const getYearLabel = (year: number, lang: keyof typeof languages) => {
  if (lang === "en") return year.toString();
  return (1368 - 1989 + year).toLocaleString("fa-IR", {
    useGrouping: false,
  });
};
