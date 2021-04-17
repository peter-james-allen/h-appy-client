import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import DrawerNavigator from '../routes/DrawerNavigator'

jest.mock('../routes/DrawerNavigator');
DrawerNavigator.mockImplementation(() => 'DrawerNavigator mocked');

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
