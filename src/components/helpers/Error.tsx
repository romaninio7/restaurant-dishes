import * as React from 'react';

const Error = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='ui header red centered' style={{ margin: '40px 0' }}>
      {children}
    </div>
  );
};

export default Error;
