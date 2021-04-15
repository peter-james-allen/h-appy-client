import React from "react";
import { interpolate } from "react-native-reanimated";
import renderer from "react-test-renderer";
import { AppNavigator } from '../routes/AppNavigator'

describe('<AppNavigator />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<AppNavigator />).toJSON();
    expect(tree.children.length).toBe(1);
  })
})
