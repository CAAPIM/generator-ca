/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import <%= componentName %> from './<%= componentName %>';

storiesOf('<%= componentName %>', module)
  .addWithInfo(
    'Without props',
    '',
    () => (<<%= componentName %> />),
    { inline: false, propTables: [<%= componentName %>] }
  )
  .addWithInfo(
    'With props',
    '',
    () => (<<%= componentName %> onClick={action('clicked')}>Click me!</<%= componentName %>>),
    { inline: false, propTables: [<%= componentName %>] }
  );
