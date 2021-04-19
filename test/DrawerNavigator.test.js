import React from 'react';
import renderer from 'react-test-renderer'
import IndividualCourse from '../views/IndividualCourse';
import FetchActivities from '../src/FetchActivities';
import { useNavigation } from '@react-navigation/native';
// import DrawerNavigator from '../routes/DrawerNavigator'

jest.mock('@react-navigation/native');
useNavigation.mockImplementation(() => 'Navigation mocked');

jest.mock('../src/FetchActivities');
FetchActivities.mockImplementation(() => 'Fetch request mocked');

jest.mock('../views/IndividualCourse');
IndividualCourse.mockImplementation(() => 'IndividualCourse mocked');

xdescribe('DrawerNavigator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DrawerNavigator />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})
