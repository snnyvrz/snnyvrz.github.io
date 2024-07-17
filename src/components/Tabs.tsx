import type { Category } from "../data";
import { useStore } from "@nanostores/react";
import { activeTab, updateYears } from "../timelineStore";
import { languages, ui } from "../i18n/ui";

export type Tab = "Overview" | Category;

const tabs: Tab[] = ["Overview", "General", "Education", "Work"];

const getTabLabel = (lang: keyof typeof languages, tab: Tab) => {
  const translations = ui[lang];
  switch (tab) {
    case "Overview":
      return translations["timelineTabs.overview"];
    case "General":
      return translations["timelineTabs.general"];
    case "Education":
      return translations["timelineTabs.education"];
    case "Work":
      return translations["timelineTabs.work"];
  }
};

export const Tabs = (props: { lang: keyof typeof languages }) => {
  const { lang } = props;
  const $activeTab = useStore(activeTab);

  return (
    <div role="tablist" className="tabs tabs-boxed mb-4 mx-auto max-w-sm">
      {tabs.map((tab) => (
        <a
          role="tab"
          className={`tab ${$activeTab === tab ? "tab-active" : ""}`}
          key={tab}
          onClick={() => {
            updateYears(tab);
          }}
        >
          {getTabLabel(lang, tab)}
        </a>
      ))}
    </div>
  );
};
