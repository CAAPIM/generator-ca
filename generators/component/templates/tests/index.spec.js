/**
 * Copyright (c) <%= currentYear %> CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import <%= componentName %> from '../src';

describe('index', () => {
  it('will export <%= componentName %> as default', () => {
    expect(typeof <%= componentName %>).toBe('function');
  });
});
