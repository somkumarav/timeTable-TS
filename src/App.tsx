import { useEffect, useState } from 'react';
import { useAuth } from './hooks';
import './sass/App.scss';
import { Main } from './pages/Main';
import { Signup } from './pages/Signup';
import { Loading } from './pages/Loading';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const { isAuthentic } = useAuth();

  useEffect(() => {
    if (isAuthentic) setIsAuth(isAuthentic);
    const random = Math.random() * 500 + 500;
    setTimeout(() => {
      setLoading(false);
    }, random);
  }, [isAuthentic]);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : isAuth ? (
        <Main />
      ) : (
        <Signup setIsAuth={setIsAuth} />
      )}
    </div>
  );
};

export default App;
