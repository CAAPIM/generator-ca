/**
 * Copyright (c) <%= currentYear %> CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

export default {
  variables: (vars: Object, globalVars?: Object = {}) => ({
    mainColor: globalVars.mainColor || '#33322f',
    bgColor: globalVars.bgColor || '#ffd700',
    bgColorHover: globalVars.bgColorHover || '#debb00',
    bgColorActive: globalVars.bgColorActive || '#bfa100',
    borderRadius:
      (typeof globalVars.borderRadius !== 'undefined' && globalVars.borderRadius !== null) ?
      globalVars.borderRadius : 4,
    padding: [[10, 20]],
    boxShadow: [[0, 2, 5, '#ccc']],
  }),

  styles: (styles: Object, vars: Object) => ({
    root: {
      display: 'block',
    },
    button: {
      color: vars.mainColor,
      backgroundColor: vars.bgColor,
      padding: vars.padding,
      border: 'none',
      cursor: 'pointer',
      borderRadius: vars.borderRadius,
      boxShadow: vars.boxShadow,
      marginRight: 15,

      '&:hover': {
        backgroundColor: vars.bgColorHover,
      },

      '&:active': {
        backgroundColor: vars.bgColorActive,
      },
    },
    value: {
      color: 'blue',
    },
  }),
};
