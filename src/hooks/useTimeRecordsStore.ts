import { create } from "zustand";

type TimeRecordsStore = {
  timeRecords?: number[];
  setRecords: (records: number[]) => void;
  clearRecords: () => void;
};

export const useTimeRecordsStore = create<TimeRecordsStore>()((set) => ({
  setRecords: (records: number[]) => set({ timeRecords: records }),
  clearRecords: () => set({ timeRecords: [] }),
}));
