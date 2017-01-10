/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

export default {
  variables: {
    mainColor: '#33322f',
    bgColor: '#ffd700',
    bgColorHover: '#debb00',
    bgColorActive: '#bfa100',
    borderRadius: 4,
    padding: [[10, 20]],
    boxShadow: [[0, 2, 5, '#ccc']],
  },
  styles: (styles: Object, vars: Object) => ({
    root: {
      color: vars.mainColor,
      backgroundColor: vars.bgColor,
      padding: vars.padding,
      border: 'none',
      cursor: 'pointer',
      borderRadius: vars.borderRadius,
      boxShadow: vars.boxShadow,

      '&:hover': {
        backgroundColor: vars.bgColorHover,
      },

      '&:active': {
        backgroundColor: vars.bgColorActive,
      },
    },
  }),
};
