import { stringToSeconds } from "./timeParser";

export const classifyTimeRecords = (
  timeRecords: string[],
  interval: number
) => {
  const classifiedTimeRecords: Map<string, number> = new Map();

  timeRecords.forEach((timeRecord) => {
    const key = Math.floor(stringToSeconds(timeRecord) / interval).toString();
    if (!classifiedTimeRecords.has(key)) {
      classifiedTimeRecords.set(key, 1);
    } else {
      classifiedTimeRecords.set(key, (classifiedTimeRecords.get(key) ?? 1) + 1);
    }
  });

  return classifiedTimeRecords;
};
