import { secondsToString } from "./timeParser";

type Category = {
  time: number;
  records: number[];
  upperLimit: string;
  lowerLimit: string;
  label: string;
};

export const classifyTimeRecords = (
  timeRecords: number[],
  interval: number
) => {
  const fastest = Math.floor(Math.min(...timeRecords) / interval);
  const slowest = Math.floor(Math.max(...timeRecords) / interval);
  const timeRecordsCategories: Category[] = [];

  for (let i = fastest; i <= slowest; i += 1) {
    const upperLimit = secondsToString(i * interval + interval - 1);
    const lowerLimit = secondsToString(i * interval);

    timeRecordsCategories.push({
      time: i,
      records: [],
      upperLimit,
      lowerLimit,
      label: `${lowerLimit} - ${upperLimit}`,
    });
  }

  timeRecords.forEach((record) => {
    const category = timeRecordsCategories.find(
      (category) =>
        record >= category.time * interval &&
        record < category.time * interval + interval
    );

    if (category) {
      category.records.push(record);
    }
  });

  return timeRecordsCategories;
};
