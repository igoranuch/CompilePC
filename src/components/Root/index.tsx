import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import BuildScreen from '../BuildScreen';
import NotFoundScreen from '../NotFoundScreen';
import ProductScreen from '../ProductScreen';
import ComparisonScreen from '../ComparisonScreen';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import ProtectedRoute from '../ProtectedRoute';
import AssemblyScreen from '../AssemblyScreen';

const Root: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BuildScreen />} />
        <Route path="/*" element={<NotFoundScreen />} />
        <Route path="/product/:category/:id/*" element={<ProductScreen />} />
        <Route path="/comparison" element={<ComparisonScreen />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/assemblies"
          element={
            <ProtectedRoute>
              <div>Assemblies</div>
            </ProtectedRoute>
          }
        />
        <Route path="/assembly/:id/*" element={<AssemblyScreen />} />
      </Routes>
    </Layout>
  );
};

// eslint-disable-next-line jest/no-export
export default Root;
