import React from 'react';
import Card from './Card';
import ThemeSwitcher from './ThemeSwitcher';
import { LinkHub } from './Dock';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Card>
        <div className="card-content">
          <div className="card-top-right">
            <ThemeSwitcher />
          </div>
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGyeqikXnPMQA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701646121939?e=1732147200&v=beta&t=EzszqzIqAkXXWNNEqcfMoTjhcgYUfd3MuASMQEtBZkU" alt="Profile" className="profile-picture" />
          <h1>Adriana Martínez</h1>
          <h2>Social Media Specialist Community Manager</h2>
          <LinkHub />
        </div>
      </Card>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;