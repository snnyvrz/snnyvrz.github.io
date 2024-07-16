import { languages } from "../i18n/ui";

export const birthYearLocales = {
  fa: 1368,
  en: 1989,
} as const;

export const getYears = (lang: keyof typeof languages) => {
  const years: number[] = [];
  const birthYear = birthYearLocales[lang];
  const thisYearEn = new Date().getFullYear();
  const thisYearFa = birthYear + thisYearEn - birthYearLocales.en;
  const thisYear = lang === "fa" ? thisYearFa : thisYearEn;
  for (let i = birthYear; i <= thisYear; i++) {
    years.push(i);
  }
  return years;
};
