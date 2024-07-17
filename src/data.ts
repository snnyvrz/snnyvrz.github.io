import { z } from "zod";
import type { languages } from "./i18n/ui";

type Category = "General" | "Education" | "Work";

interface DataEntry {
  title: string;
  category: Category;
  body?: string;
}

const key = z.number().min(1989).max(new Date().getFullYear());
type Data = Record<
  keyof typeof languages,
  Record<z.infer<typeof key>, DataEntry[]>
>;

export const data: Data = {
  en: {
    1989: [{ title: "Birth", category: "General" }],
    2006: [{ title: "Diploma", category: "Education" }],
    2007: [{ title: "Started Bsc", category: "Education" }],
    2014: [
      { title: "Finished Bsc", category: "Education" },
      { title: "Started MBA", category: "Education" },
    ],
    2017: [{ title: "Started XROBOX", category: "Work" }],
    2019: [{ title: "Finished MBA", category: "Education" }],
    2020: [{ title: "Started Atashyar", category: "Work" }],
    2022: [{ title: "Started Middle East Bank", category: "Work" }],
  },
  fa: {
    1989: [{ title: "تولد", category: "General" }],
    2006: [{ title: "دیپلم", category: "Education" }],
    2007: [{ title: "آغاز کارشناسی", category: "Education" }],
    2014: [
      { title: "پایان کارشناسی", category: "Education" },
      { title: "آغاز مدیریت کسب و کار", category: "Education" },
    ],
    2017: [{ title: "XROBOX", category: "Work" }],
    2019: [{ title: "پایان مدیریت کسب و کار", category: "Education" }],
    2020: [{ title: "آتشیار", category: "Work" }],
    2022: [{ title: "بانک خاورمیانه", category: "Work" }],
  },
};
