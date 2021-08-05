import React from 'react';

export default function Container({ verticalSpace = false, children }) {
  const haveVerticalSpace = verticalSpace ? 'py-12' : '';

  return (
    <div
      className={`${haveVerticalSpace} text-gray-200 max-w-7xl mx-auto sm:px-6 lg:px-8`}
    >
      {children}
    </div>
  );
}
