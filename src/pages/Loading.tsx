import React from 'react';
import { FaYinYang } from 'react-icons/fa';

interface Props {}

export const Loading: React.FC<Props> = ({}) => {
  return (
    <div className="Loading">
      <div className="loading-container">
        <FaYinYang className="loading-container-i" />
      </div>
    </div>
  );
};
