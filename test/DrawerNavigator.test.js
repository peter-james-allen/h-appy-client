import React from 'react';
import renderer from 'react-test-renderer'
import DrawerNavigator from '../routes/DrawerNavigator'
import FetchActivities from '../src/FetchActivities';

jest.mock('../src/FetchActivities');
FetchActivities.mockImplementation(() => 'Fetch request mocked');

xdescribe('DrawerNavigator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DrawerNavigator />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})
