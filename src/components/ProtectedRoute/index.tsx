import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'reactfire';

type Props = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { data: user, status } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'success' && !user) {
      navigate('/');
    }
  }, [status, user, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
