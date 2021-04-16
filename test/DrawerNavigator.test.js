import React from 'react';
import renderer from 'react-test-renderer'
import DrawerNavigator from '../routes/DrawerNavigator'

xdescribe('DrawerNavigator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DrawerNavigator />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})
