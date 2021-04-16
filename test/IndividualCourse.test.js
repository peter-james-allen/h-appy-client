import React from 'react';
import renderer from 'react-test-renderer';
import IndividualCourse from '../views/IndividualCourse'
import FetchActivities from '../src/FetchActivities';
import { useNavigation } from '@react-navigation/native';

jest.mock('../src/FetchActivities'); // this happens automatically with automocking
FetchActivities.mockImplementation(() => 'Fetch request mocked');

jest.mock('@react-navigation/native'); // this happens automatically with automocking
useNavigation.mockImplementation(() => 'Navigation mocked');

describe('IndividualCourse', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndividualCourse />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
