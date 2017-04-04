/**
 * Copyright (c) <%= currentYear %> CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// @flow
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import React from 'react';
import withTheme from 'ca-ui-react-themer-jss';
import { storiesOf, action } from '@kadira/storybook';

import <%= componentName %>, {
  <%= componentName %>Raw,
} from './';

const <%= componentName %>WithCustomTheme = withTheme({
  variables: (vars) => ({
    ...vars,
    mainColor: 'white',
    bgColor: 'green',
    bgColorHover: 'darkgreen',
    bgColorActive: 'black',
  }),
})(<%= componentName %>);

storiesOf('<%= componentName %>', module)
  .addWithInfo(
    'Regular',
    '',
    () => (
      <<%= componentName %>
        handleChange={action('change')}
      />
    ),
    { inline: false, propTables: [<%= componentName %>Raw] },
  )
  .addWithInfo(
    'With default value',
    '',
    () => (
      <<%= componentName %>
        handleChange={action('change')}
        defaultValue={4}
      />
    ),
    { inline: false, propTables: [<%= componentName %>Raw] },
  )
  .addWithInfo(
    'With custom theme',
    '',
    () => (
      <<%= componentName %>WithCustomTheme
        handleChange={action('change')}
      />
    ),
    { inline: false, propTables: [<%= componentName %>Raw] },
  );
