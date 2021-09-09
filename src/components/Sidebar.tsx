import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks';

interface Props {
  grade: String | null;
  setGrade: React.Dispatch<React.SetStateAction<String | null>>;
}

const links = [
  's1-cse-b',
  's2-cse-b',
  's3-cse-b',
  's4-cse-b',
  's5-cse-b',
  's6-cse-b',
  's7-cse-b',
  's8-cse-b',
];

export const Sidebar: React.FC<Props> = ({ grade, setGrade }) => {
  const { user } = useAuth();

  return (
    <div className="Sidebar">
      <div className="profile">
        <img
          src={user.profileImage}
          alt="profile_image"
          className="profile-image"
        />
        <h2 className="profile-name">{user.name}</h2>
        <h4 className="profile-email">{user.email}</h4>
      </div>

      <nav className="links">
        <div>
          <ul className="links-list">
            {links.map((link) => {
              return (
                <li
                  key={link}
                  onClick={() => {
                    setGrade(link);
                  }}
                  className={`links-list-item ${grade === link && 'active'}`}
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
