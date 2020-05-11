import React from 'react';

const RenderInput = ({ input, label, meta }): JSX.Element => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <strong>{label}</strong>
      <input
        {...input}
        autoComplete='off'
        placeholder={meta.error && meta.touched ? meta.error : ''}
      />
    </div>
  );
};

export default RenderInput;
