import React from 'react';

const Input = Component => ({ errorText, ...props }) => ([
  <Component
    key="0"
    className="mui-textfield--with-error"
    invalid={errorText}
    {...props}
  />,
  <div key="1" className="mui-textfield--error-text">{errorText}</div>,
]);

export default Input;
