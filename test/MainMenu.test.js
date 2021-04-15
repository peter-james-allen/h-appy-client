import React from 'react';
import renderer from 'react-test-renderer';
import MainMenu from '../views/MainMenu';

xdescribe('<MainMenu />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<MainMenu />).toJSON();
    expect(tree.children).toHaveLength(1);
    expect(tree.type).toBe('View');
  });
});
