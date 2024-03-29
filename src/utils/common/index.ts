import moment from 'moment';

export const wordToLowerCase = (lowerWord: any): any => {
  return lowerWord?.toLowerCase();
};

export const dateHourandMinute = (date: any): any => {
  return moment(date).format('h:mm');
};

export const wordCapitalCase = (wordCapital: any): any => {
  return wordCapital[0]?.toUpperCase() + wordCapital?.substring(1);
};

export const convertToKM = (wordCapital: number): number => {
  return wordCapital / 1000;
};

export const convertToCelcius = (wordCelcius: number): string => {
  const convertCelcius = wordCelcius - 273;
  return convertCelcius?.toFixed(1);
};

export const unixConvert = (date: any) => {
  return moment.unix(date);
};

export const codeIcon = (code: any) => {
  return code;
};

export const replaceAllDuplicateLineBreaks = (sentence: string): string => {
  return sentence.replace(/\\n/g, '\n');
};
