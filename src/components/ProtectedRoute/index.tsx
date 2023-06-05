import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'reactfire';

type Props = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { data: user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

  return <>{children}</>;
};

export default ProtectedRoute;
