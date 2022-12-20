import 'react-native';
import {convertToKM, wordCapitalCase, wordToLowerCase} from '.';

it('lowerCaseFirstChar works well', () => {
  expect(wordToLowerCase('LoremIpsumDolorSitAmet')).toEqual(
    'loremipsumdolorsitamet',
  );
});

it('wordCapitalCase works well', () => {
  expect(wordCapitalCase('loremipsum')).toEqual('Loremipsum');
});

it('convertToKM works well', () => {
  expect(convertToKM(1000)).toEqual(10);
});
