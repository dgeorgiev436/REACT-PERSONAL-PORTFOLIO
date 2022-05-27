import { useState, useEffect } from 'react';
import SideBar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import BlogPost from './components/BlogPost';
import { Switch as Switching, Route, Redirect } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import SettingsIcon from '@material-ui/icons/Settings';

import {MainLayout} from './styles/Layouts';
function App() {
  const [theme, setTheme] = useState('dark-mode');
  const [checked, setChecked] = useState(false);
  const [isNavToggle, setNavToggle] = useState(false)
  const [setting, setSetting] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const themeMode = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode');
      setChecked(false)
    } else {
      setTheme('light-mode');
      setChecked(true)
    }
  }
  return (
    <div className="App">
      <SideBar isNavToggle={isNavToggle} setNavToggle={setNavToggle} />

      {/* Setting Wheel for light and dark theme */}
      <div className="setting-wheel">
        <IconButton onClick={() => setSetting(!setting)}>
          <SettingsIcon />
        </IconButton>
      </div>

      {/* Toggle Button for light and dark theme*/}
      <div>
        <div className={setting ? 'light-dark-mode theme' : 'light-dark-mode'}>
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              color="default"
              checked={checked}
              inputProps={{ 'aria-label': '' }}
              size='medium'
              onClick={themeMode}
            />
          </div>
        </div>
      </div>

      {/* Toggler Button for navbar*/}
      <div className="hamburger-bar">
        <IconButton onClick={() => setNavToggle(!isNavToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      {/* Main Section Start */}
      <MainSectionStyled>
      <MainLayout>
        <Switching>
          <Route path="/" exact> <HomePage /> </Route>
          <Route path="/about" exact> <AboutPage /> </Route>
          <Route path="/services" exact> <ServicePage /> </Route>
          <Route path="/resume" exact> <ResumePage /> </Route>
          <Route path="/portfolio" exact> <PortfolioPage /> </Route>
          <Route path="/blog" exact> <BlogPage /> </Route>
          <Route path="/blogPost" exact> <BlogPost /> </Route>
          <Route path="/contact" exact> <ContactPage /> </Route>
          <Redirect to="/" />
        </Switching>
        </MainLayout>
      </MainSectionStyled>

    </div>
  );
}

const MainSectionStyled = styled.main`
    margin-left: 16.3rem;
    min-height: 100vh;
    @media screen and (max-width:1200px){
      margin-left: 0;
    }
`;

export default App;
