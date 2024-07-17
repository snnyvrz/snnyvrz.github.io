import { atom, map } from "nanostores";
import type { Tab } from "./components/Tabs";
import { getYears } from "./utils/timeline";

export const activeTab = atom<Tab>("Overview");

export const years = map<number[]>(getYears(activeTab.get()));

export const updateYears = (tab: Tab) => {
  activeTab.set(tab);
  years.set(getYears(tab));
};
