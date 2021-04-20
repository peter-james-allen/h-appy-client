import { back } from 'react-native/Libraries/Animated/src/Easing';

const NIBBLES = [
  'Bite-sized activities for the short of time. ',
  'These morsels are low investment, high-return ways to incrementally ',
  'increase your happiness and productivity, on nibble at a time. ',
  'They can take anywhere from 5 minutes to an hour.',
].join('');

const APPETISERS = [
  'These activities are average only in size. ',
  'When you are ready to commit to something but still want to have the rest of the ',
  'day to enjoy afterwards, this is the course for you. ',
  'Perfect if you only have a morning, afternoon or evening to spare.',
].join('');

const MAINS = [
  'Welcome to the main event. When only serious undertakings will satisfy, ',
  'main activities are what you need.',
  'They can take a full day, or be a goal that you work towards over weeks or months. ',
  'Although they require more in terms of time and energy, the rewards are unmatchable.',
].join('');

const DESSERTS = [
  "Sometimes you need minimal effort and maximum comfort. We've got your back. ",
  'Dessert activities are to be enjoyed as a special treat, because sometimes you just need that.',
  "They can be enjoyed whenever, just don't fill up on them. ",
  'Top tip: These are perfect enjoyed right after completing a main',
].join('');

export {
  NIBBLES, APPETISERS, MAINS, DESSERTS,
};
