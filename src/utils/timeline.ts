import type { Tab } from "../components/Tabs";
import { data, type Category, type DataEntry } from "../data";
import type { languages } from "../i18n/ui";

export const doEntriesContainCategory = (
  entries: DataEntry[],
  category: Category,
) => {
  return entries.filter((v) => v.category === category).length > 0;
};

export const getYears = (selectedTab: Tab) => {
  const years: number[] = [];
  const thisYear = new Date().getFullYear();
  for (let i = 1989; i <= thisYear; i++) {
    if (data.en[i]) {
      if (
        selectedTab === "Overview" ||
        doEntriesContainCategory(data.en[i], selectedTab)
      ) {
        years.push(i);
      }
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
