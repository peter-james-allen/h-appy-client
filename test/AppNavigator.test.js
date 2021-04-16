import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import { AppNavigator } from '../routes/AppNavigator';

describe('<AppNavigator />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<AppNavigator />).toJSON();
    expect(tree.children).toHaveLength(1);
    expect(tree.type).toBe('View');
  });
});
