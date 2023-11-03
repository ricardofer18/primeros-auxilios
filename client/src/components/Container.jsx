import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="row mx-auto bg-white">
      {children}
    </div>
  );
};

export default Container;
