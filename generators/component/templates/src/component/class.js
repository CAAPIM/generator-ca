/**
 * Copyright (c) <%= currentYear %> CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React, { Component } from 'react';
import cx from 'classnames';
import withTheme from 'ca-ui-react-themer-jss';

import theme from './index.theme';

type Props = {
  defaultValue?: ?number,
  className?: string,
  classes?: Object,
  handleChange?: ?(value: number) => void,
};

type State = {
  value: number,
};

export class <%= componentName %>Raw extends Component {

  static defaultProps: {} = {
    defaultValue: null,
    className: '',
    classes: undefined,
    handleChange: null,
  };

  static displayName = '<%= componentName %>';

  constructor(props: Props) {
    super(props);

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  state: State = {
    value: this.props.defaultValue || 0,
  };

  props: Props;

  handleIncrease: () => void;
  handleIncrease() {
    this.handleChange(this.state.value + 1);
  }

  handleDecrease: () => void;
  handleDecrease() {
    this.handleChange(this.state.value - 1);
  }

  handleChange: (value: number) => void;
  handleChange(value: number) {
    if (typeof this.props.handleChange === 'function') {
      this.props.handleChange(value);
    }
    this.setState({ value });
  }

  render() {
    const { className, classes = {} } = this.props;
    const { value } = this.state;

    return (
      <div className={cx(className, classes.root)}>
        <p>
          <button
            role="button"
            data-id="decrease"
            className={classes.button}
            onClick={this.handleDecrease}
          >Decrease</button>
          <button
            role="button"
            data-id="increase"
            className={classes.button}
            onClick={this.handleIncrease}
          >Increase</button>
        </p>
        <p className={classes.value}>
          Current value: <span data-id="value">{value}</span>
        </p>
      </div>
    );
  }

}

export default withTheme(theme)(<%= componentName %>Raw);
