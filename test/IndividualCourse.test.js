import React from 'react';
import renderer from 'react-test-renderer';
import IndividualCourse from '../views/IndividualCourse'

describe('IndividualCourse', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndividualCourse />).toJSON()
    expect(tree).toMatchSnapShot()
  })
})
