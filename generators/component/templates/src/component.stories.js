/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import <%= componentName %>WithTheme, {
  <%= componentName %>,
} from './<%= componentName %>';

storiesOf('<%= componentName %>', module)
  .addWithInfo(
    'Without props',
    '',
    () => (<<%= componentName %>WithTheme />),
    { inline: false, propTables: [<%= componentName %>] }
  )
  .addWithInfo(
    'With props',
    '',
    () => (
      <<%= componentName %>WithTheme
        onClick={action('clicked')}
      >Click me!</<%= componentName %>WithTheme>
    ),
    { inline: false, propTables: [<%= componentName %>] }
  )
  .addWithInfo(
    'Without theme',
    '',
    () => (
      <<%= componentName %>
        onClick={action('clicked')}
      >Click me!</<%= componentName %>>
    ),
    { inline: false, propTables: [<%= componentName %>] }
  );
