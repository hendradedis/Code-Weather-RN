import moment from 'moment';

export const wordToLowerCase = (lowerWord: string): string => {
  return lowerWord?.toLowerCase();
};

export const dateHourandMinute = (date: string): string => {
  return moment(date).format('HH:mm');
};

export const wordCapitalCase = (wordCapital: string): string => {
  return wordCapital[0].toUpperCase() + wordCapital.substring(1);
};

export const convertToKM = (wordCapital: number) => {
  return wordCapital / 1000;
};

export const convertToCelcius = (wordCelcius: number) => {
  const convertCelcius = wordCelcius - 273;
  return convertCelcius.toFixed(1);
};
