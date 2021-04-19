import React from 'react';
import renderer from 'react-test-renderer';
import IndividualActivity from '../views/IndividualActivity';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native');
useNavigation.mockImplementation(() => 'Navigation mocked');

describe('IndividualActivity', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndividualActivity />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
