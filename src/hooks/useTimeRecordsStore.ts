import { DEFAULT_INTERVAL } from "@/constants/defaultInterval";
import { create } from "zustand";

type TimeRecordsStore = {
  timeRecords?: number[];
  interval: number;
  setRecords: (records: number[]) => void;
  clearRecords: () => void;
  setInterval: (interval: number) => void;
};

export const useTimeRecordsStore = create<TimeRecordsStore>()((set) => ({
  interval: DEFAULT_INTERVAL,
  setRecords: (records: number[]) => set({ timeRecords: records }),
  clearRecords: () => set({ timeRecords: [] }),
  setInterval: (interval: number) => set({ interval }),
}));
