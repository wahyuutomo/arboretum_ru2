import React from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes'
import {HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;