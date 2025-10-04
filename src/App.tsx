import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import DeviceManagement from './components/DeviceManagement';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <DeviceManagement />
      </div>
    </ThemeProvider>
  );
}

export default App;