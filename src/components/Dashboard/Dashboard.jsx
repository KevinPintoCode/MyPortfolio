import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './Home';
import Login from '../Login/Login';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  return (
    <>
      <div className="dashboard"> {user ? <Home /> : <Login />} </div>
    </>
  );
}
