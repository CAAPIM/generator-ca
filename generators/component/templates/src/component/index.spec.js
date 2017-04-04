/**
 * Copyright (c) <%= currentYear %> CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React from 'react';
import { shallow, mount } from 'enzyme';

import <%= componentName %>, {
  <%= componentName %>Raw,
} from './';
import theme from './index.theme';

describe('<%= componentName %>', () => {
  it('will render in a div with given className', () => {
    const component = mount(
      <<%= componentName %>Raw className="test-class" />,
    );

    expect(component.hasClass('test-class')).toBe(true);
  });

  it('will render classes', () => {
    const classes = {
      root: 'root-class',
      button: 'button-class',
      value: 'value-class',
    };
    const component = shallow(
      <<%= componentName %>Raw classes={classes} />,
    );

    expect(component.hasClass('root-class')).toBe(true);
    expect(component.find('.button-class').length).toBe(2);
    expect(component.find('.value-class').length).toBe(1);
  });

  it('will change displayed value when increase button is clicked', () => {
    const component = mount(
      <<%= componentName %> />,
    );

    component.find('[data-id="increase"]').simulate('click');

    expect(component.find('[data-id="value"]').text()).toBe('1');
  });

  it('will change displayed value when decrease button is clicked', () => {
    const component = mount(
      <<%= componentName %> />,
    );

    component.find('[data-id="decrease"]').simulate('click');

    expect(component.find('[data-id="value"]').text()).toBe('-1');
  });

  it('will trigger the handleChange callback prop', () => {
    const spy = jest.fn();
    const component = mount(
      <<%= componentName %> handleChange={spy} />,
    );

    component.find('[data-id="increase"]').simulate('click');

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('will trigger the handleChange callback prop multiple times', () => {
    const spy = jest.fn();
    const component = mount(
      <<%= componentName %> handleChange={spy} defaultValue={4} />,
    );

    component.find('[data-id="increase"]').simulate('click');
    component.find('[data-id="increase"]').simulate('click');
    component.find('[data-id="decrease"]').simulate('click');
    component.find('[data-id="increase"]').simulate('click');

    expect(spy).toHaveBeenCalledTimes(4);
    expect(spy).lastCalledWith(6);
    expect(component.find('[data-id="value"]').text()).toBe('6');
  });

  describe('theme', () => {
    it('will return styles with default variables', () => {
      const vars = theme.variables({});
      const styles = theme.styles({}, vars);

      expect(styles.button.borderRadius).toBe(4);
    });

    it('will render global theme variables', () => {
      const globalTheme = {
        borderRadius: 0,
      };
      const vars = theme.variables({}, globalTheme);

      expect(vars.borderRadius).toBe(0);
    });
  });
});
