/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

const camelCase = require('lodash/camelCase');

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

module.exports = {
  componentName: (value) => {
    const camelCaseValue = capitalizeFirstLetter(camelCase(value));

    if (value !== camelCaseValue) {
      return 'The component name must be capitalized CamelCase.';
    }

    return true;
  },

  description: (value) => {
    if (!value || value === '') {
      return 'Please write a few words to describe what the component does.';
    }

    return true;
  },
};
