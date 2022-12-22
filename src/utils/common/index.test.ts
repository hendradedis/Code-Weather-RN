import 'react-native';
import {
  convertToCelcius,
  convertToKM,
  replaceAllDuplicateLineBreaks,
  wordCapitalCase,
  wordToLowerCase,
} from '.';

it('lowerCaseFirstChar works well', () => {
  expect(wordToLowerCase('LoremIpsumDolorSitAmet')).toEqual(
    'loremipsumdolorsitamet',
  );
});

it('wordCapitalCase works well', () => {
  expect(wordCapitalCase('loremipsum')).toEqual('Loremipsum');
});

it('convertToKM works well', () => {
  expect(convertToKM(1000)).toEqual(1);
});

it('convertToCelcius works well', () => {
  expect(convertToCelcius(300)).toBe('27.0');
});

it('convertToCelcius should return 27.0 when given 300', () => {
  expect(convertToCelcius(300)).toEqual('27.0');
});

it('replaceAll works well', () => {
  expect(replaceAllDuplicateLineBreaks('Test \\nUtil')).toStrictEqual(
    'Test \nUtil',
  );
  expect(replaceAllDuplicateLineBreaks('Test \\n\\nUtil')).toStrictEqual(
    'Test \n\nUtil',
  );
});
