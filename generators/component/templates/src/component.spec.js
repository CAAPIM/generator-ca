/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

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
