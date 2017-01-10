/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import jss from 'jss';

setAddon(infoAddon);

const req = require.context('../src', true, /.stories\.js$/);

configure(() => req.keys().forEach(req), module);
