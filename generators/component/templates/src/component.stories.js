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
