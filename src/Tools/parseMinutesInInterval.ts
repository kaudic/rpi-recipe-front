const twoStringsChecker = (str:any) => {
  if (str.toString().length < 2) {
    str = `0${str}`;
  }
  return str;
};

const parseMinutesInInterval = (min:any) => {
  const minutes = min % 60;
  const hours = Math.floor((min - minutes) / 60);
  return `${twoStringsChecker(hours)}:${twoStringsChecker(minutes)}:00`;
};

export default parseMinutesInInterval;
