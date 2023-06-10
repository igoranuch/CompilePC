import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'reactfire';

type Props = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { data: user } = useUser();

  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
  }

  return <>{children}</>;
};

export default ProtectedRoute;
