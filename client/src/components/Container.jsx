import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="row mx-auto bg-white h-full">
      {children}
    </div>
  );
};

export default Container;
