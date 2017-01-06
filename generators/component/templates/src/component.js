/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import reactThemerJss from 'react-themer-jss';

import <%= componentName %>Theme from './<%= componentName %>.theme';

type Props = {
  children?: string,
  onClick?: Function,
  theme?: Object,
};

type defaultProps = {
  children: string
};

export class <%= componentName %> extends Component {

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
    const { theme } = this.props;
    const styles = theme && theme.styles ? theme.styles : {};

    return (
      <button className={cx('some-class', styles.root)} onClick={this.handleOnClick}>
        {this.props.children}
      </button>
    );
  }

}

<%= componentName %>.displayName = '<%= componentName %>';

<%= componentName %>.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.object,
};

<%= componentName %>.defaultProps = {
  children: 'I am default',
};

export default reactThemerJss(<%= componentName %>Theme)(<%= componentName %>);
