/**
 * Copyright (c) <%= currentYear %> CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

 // @flow

 import React from 'react';
 import cx from 'classnames';
 import compose from 'recompose/compose';
 import withState from 'recompose/withState';
 import withHandlers from 'recompose/withHandlers';
 import withTheme from 'ca-ui-react-themer-jss';

 import theme from './index.theme';

 type InternalProps = {
   className?: string,
   classes?: Object,
   value?: number,
   handleDecrease?: (event: Object) => void,
   handleIncrease?: (event: Object) => void,
 };

 export const <%= componentName %>Raw = ({
   className,
   handleDecrease,
   handleIncrease,
   value,
   classes = {},
 }: InternalProps) => (
   <div className={cx(className, classes.root)}>
     <p>
       <button
         role="button"
         data-id="decrease"
         className={classes.button}
         onClick={handleDecrease}
       >Decrease</button>
       <button
         role="button"
         data-id="increase"
         className={classes.button}
         onClick={handleIncrease}
       >Increase</button>
     </p>
     <p className={classes.value}>
       Current value: <span data-id="value">{value}</span>
     </p>
   </div>
 );

 <%= componentName %>Raw.displayName = '<%= componentName %>';

 <%= componentName %>Raw.defaultProps = {
   className: '',
   classes: undefined,
   value: 0,
   handleDecrease: undefined,
   handleIncrease: undefined,
 };

 type Props = {
   defaultValue?: ?number,
   className?: ?string,
   handleChange?: ?(value?: number) => void,
 };

 type PropsWithState = {
   setValue: (number | (value?: number) => number) => void,
   value: number,
 } & Props;

 export const getInitialValue = ({ defaultValue }: Props) => defaultValue || 0;

 export const handleValueChange = ({ value, setValue, handleChange }: PropsWithState) => {
   if (typeof handleChange === 'function') {
     handleChange(value);
   }
   setValue(value);
 };

 export const handleIncrease = ({ value, ...otherProps }: PropsWithState) => () =>
   handleValueChange({ ...otherProps, value: value + 1 });

 export const handleDecrease = ({ value, ...otherProps }: PropsWithState) => () =>
   handleValueChange({ ...otherProps, value: value - 1 });

 const <%= componentName %>: (props: Props) => React.Element<*> = compose(
   withTheme(theme),
   withState('value', 'setValue', getInitialValue),
   withHandlers({ handleIncrease, handleDecrease }),
 )(<%= componentName %>Raw);

 export default <%= componentName %>;
