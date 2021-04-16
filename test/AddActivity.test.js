import React from 'react';
import renderer from 'react-test-renderer';
import AddActivity from '../views/AddActivity';

test('renders correctly', () => {
  const tree = renderer.create(<AddActivity />).toJSON();
  expect(tree).toMatchSnapshot();
});
