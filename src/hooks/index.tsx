import { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
  profileImage: string;
}

interface Return {
  user: User;
  isAuthentic: boolean;
}

interface Functions {
  getUser: () => User;
  setUser: (user: User) => void;
}

const getUser: Functions['getUser'] = () => {
  let data = localStorage.getItem('user');
  if (data) {
    // console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user') as string);
  }
  return { name: '', email: '', profileImage: '' };
};

export const useAuth = (): Return => {
  const [isAuthentic, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    profileImage: '',
  });
  useEffect(() => {
    const userData = getUser();
    if (userData.name && userData.email && userData.profileImage) {
      const data = {
        name: userData.name,
        email: userData.email,
        profileImage: userData.profileImage,
      };
      setIsAuthenticated(true);
      setUser(data);
    } else {
      setIsAuthenticated(false);
      console.log('not auth');
    }
  }, []);

  return { user, isAuthentic };
};
