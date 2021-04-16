import React from 'react';
import renderer from 'react-test-renderer'
import MainMenu from '../views/MainMenu'
import FetchActivities from '../src/FetchActivities';
import { useNavigation } from '@react-navigation/native';

jest.mock('../src/FetchActivities');
FetchActivities.mockImplementation(() => 'Fetch request mocked');

jest.mock('@react-navigation/native');
useNavigation.mockImplementation(() => 'Navigation mocked');

describe('MainMenu', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MainMenu />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})
