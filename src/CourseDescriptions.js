import { back } from 'react-native/Libraries/Animated/src/Easing';

const NIBBLES = [
  'Bite-sized activities for the short of time. ',
  'These morsels are low investment, high-return ways to incrementally ',
  'increase your happiness and productivity, one nibble at a time. ',
  'They can take anywhere from 5 minutes to an hour.',
].join('');

const APPETISERS = [
  'These activities are average only in size. ',
  'When you are ready to commit to something but still want to have the rest of the ',
  'day to enjoy afterwards, this is the course for you. ',
  'Perfect if you only have a morning, afternoon or evening to spare.',
].join('');

const MAINS = [
  'Welcome to the main event. When only serious doing will satisfy, ',
  'main activities are what you need. ',
  'They may take a full day, or be a goal that you work towards over weeks or months. ',
  'They often require more from you in time and energy, but the rewards are unmatchable.',
].join('');

const DESSERTS = [
  "When you need a treat, we've got your back. ",
  'Dessert activities are the perfect tonic to hard work and stress. ',
  "They're great right after completing a main activity, ",
  "but can be enjoyed whenever you like, just don't fill up on them.",
].join('');

export {
  NIBBLES, APPETISERS, MAINS, DESSERTS,
};
