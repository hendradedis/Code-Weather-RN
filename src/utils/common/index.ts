import moment from 'moment';

export const wordToLowerCase = (lowerWord: any): any => {
  return lowerWord?.toLowerCase();
};

export const dateHourandMinute = (date: any): any => {
  return moment(date).format('HH:mm');
};

export const wordCapitalCase = (wordCapital: any): any => {
  return wordCapital[0]?.toUpperCase() + wordCapital?.substring(1);
};

export const convertToKM = (wordCapital: any) => {
  return wordCapital / 1000;
};

export const convertToCelcius = (wordCelcius: any) => {
  const convertCelcius = wordCelcius - 273;
  return convertCelcius?.toFixed(1);
};
