import React from 'react';
import renderer from 'react-test-renderer';
import About from '../views/About';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native');
useNavigation.mockImplementation(() => 'Navigation mocked');

describe('About', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
