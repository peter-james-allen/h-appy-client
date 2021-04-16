import React from 'react';
import renderer from 'react-test-renderer';
import { CourseHeader } from '../components/CourseHeader';

test('renders correctly', () => {
  const tree = renderer.create(<CourseHeader />).toJSON();
  expect(tree.children).toHaveLength(1);
});
