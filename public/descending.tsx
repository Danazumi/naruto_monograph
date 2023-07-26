import React from 'react';

const AscendingLayout = ({ children }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        height: '100%', // You may want to adjust the height based on your layout requirements
      }}
    >
      {children}
    </div>
  );
};

export default AscendingLayout;
