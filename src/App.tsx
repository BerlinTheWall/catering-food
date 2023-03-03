import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Footer, Navbar, Welcome } from 'components';
// import theme from 'types/theme';
// import { ThemeProvider } from '@emotion/react';

const App: React.FC = () => {
  // function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
      <Welcome />
      <Footer />
    </div>
    // </ThemeProvider>
  );
};

export default App;
