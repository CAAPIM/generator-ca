import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

const req = require.context('../src', true, /.stories\.js$/);

configure(() => req.keys().forEach(req), module);
