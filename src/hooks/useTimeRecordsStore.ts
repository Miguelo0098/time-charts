import { create } from "zustand";

type TimeRecordsStore = {
  timeRecords?: string[];
  setRecords: (records: string[]) => void;
  clearRecords: () => void;
};

export const useTimeRecordsStore = create<TimeRecordsStore>()((set) => ({
  setRecords: (records: string[]) => set({ timeRecords: records }),
  clearRecords: () => set({ timeRecords: [] }),
}));
