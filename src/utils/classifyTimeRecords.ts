type Category = {
  time: number;
  records: number[];
};

export const classifyTimeRecords = (
  timeRecords: number[],
  interval: number
) => {
  const fastest = Math.floor(Math.min(...timeRecords) / interval);
  const slowest = Math.floor(Math.max(...timeRecords) / interval);
  const timeRecordsCategories: Category[] = [];

  for (let i = fastest; i <= slowest; i += 1) {
    timeRecordsCategories.push({ time: i, records: [] });
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
