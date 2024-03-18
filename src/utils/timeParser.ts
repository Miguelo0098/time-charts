export const stringToSeconds = (time: string) => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
};

export const secondsToString = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes =
    Math.floor((seconds % 3600) / 60) > 9
      ? Math.floor((seconds % 3600) / 60)
      : `0${Math.floor((seconds % 3600) / 60)}`;
  const remainingSeconds = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  return `${hours}:${minutes}:${remainingSeconds}`;
};
