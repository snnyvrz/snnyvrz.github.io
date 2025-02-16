export const languagesList = ["en", "fa"] as const;

export type Language = (typeof languagesList)[number];

export type Languages = typeof languages;

export const languages = {
  en: "English",
  fa: "فارسی",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "navbar.title": "Sina Niyavarzi",
    "hero.title": "Sina Niyavarzi",
    "hero.subtitle": "Software Developer",
    "hero.button": "Learn More",
    "timeline.title": "Timeline",
    "timelineTabs.overview": "Overview",
    "timelineTabs.general": "General",
    "timelineTabs.education": "Education",
    "timelineTabs.work": "Work",
    "downloadCV.title": "CV",
    downloadCV: "Download CV",
  },
  fa: {
    "navbar.title": "سینا نیاورزی",
    "hero.title": "سینا نیاورزی",
    "hero.subtitle": "توسعه دهنده نرم افزار",
    "hero.button": "بیشتر بدانید",
    "timeline.title": "زمان بندی",
    "timelineTabs.overview": "دورنما",
    "timelineTabs.general": "عمومی",
    "timelineTabs.education": "تحصیلی",
    "timelineTabs.work": "کاری",
    "downloadCV.title": "رزومه",
    downloadCV: "دانلود رزومه",
  },
} as const;
