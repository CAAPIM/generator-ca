/* @flow */

/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

type Props = {
  children: string,
  onClick: () => void
};

type defaultProps = {
  children: string
};

export default class <%= componentName %> extends Component {

  static defaultProps: defaultProps;

  constructor(props: Props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  props: Props;

  handleOnClick: () => void;

  handleOnClick(e: Object) {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }
  }

  render() {
    const exampleClasses = cx('some-class');

    return (
      <button className={exampleClasses} onClick={this.handleOnClick}>
        {this.props.children}
      </button>
    );
  }

}

<%= componentName %>.displayName = '<%= componentName %>';

<%= componentName %>.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

<%= componentName %>.defaultProps = {
  children: 'I am default',
};
