import React from 'react';
import { shallow } from 'enzyme';
import <%= componentName %> from './<%= componentName %>';

it('will no trigger the onClick prop event', () => {
  const index = 0;
  const component = shallow(
    <<%= componentName %> />
  );

  component.simulate('click');
  expect(index).toEqual(0);
});

it('wil trigger the onClick prop event', () => {
  let index = 0;

  const component = shallow(
    <<%= componentName %> onClick={() => index++} />
  );

  component.simulate('click');
  expect(index).toEqual(1);
});
