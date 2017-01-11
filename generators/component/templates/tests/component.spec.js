/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React from 'react';
import { shallow } from 'enzyme';
import <%= componentName %>WithTheme, {
  <%= componentName %>,
} from '../src/<%= componentName %>';

describe('<%= componentName %>', () => {
  it('will not trigger the onClick prop event', () => {
    const index = 0;
    const component = shallow(
      <<%= componentName %> />
    );

    component.simulate('click');
    expect(index).toEqual(0);
  });

  it('will trigger the onClick prop event', () => {
    let index = 0;

    const component = shallow(
      <<%= componentName %> onClick={() => index++} />
    );

    component.simulate('click');
    expect(index).toEqual(1);
  });

  it('will render JSS theme', () => {
    const component = shallow(
      <<%= componentName %>WithTheme />
    );

    expect(!!component.html().match(/class="some-class root-[0-9]+"/)).toEqual(true);
  });
});
