import React from 'react';

interface Props {}

export const NoData: React.FC<Props> = ({}) => {
  return (
    <div className="NoData">
      <h2>No Resource Found</h2>
      <h4>We are currently working to add more data.</h4>
    </div>
  );
};
