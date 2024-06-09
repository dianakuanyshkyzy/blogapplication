
import React from 'react';
import Page from '../page';
import './styles.css'
import { AuthProvider } from './contexts/AuthContext';
const App: React.FC = () => {
  return (
    <AuthProvider>
    <div className='bg-beige'>
      <Page />
    </div>
    </AuthProvider>
  );
};

export default App;
