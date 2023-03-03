import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import './index.css';

// import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
// import App from './App';
import App from './App';
// import React from 'react';
// import { render } from 'react-dom';
// import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
// import Root from './Root';
// use default theme
// const theme = createTheme();
// import { ThemeProvider } from '@material-ui/core/styles';
// import theme from './types/theme';
// Or Create your Own theme:
// const theme = createTheme({
//   overrides: {
//     MuiAppBar: {
//       colorPrimary: {
//         backgroundColor: '#662E9B',
//       },
//     },
//   },
//   palette: {
//     primary: {
//       main: '#E33E7F',
//     },
//   },
// });

// function App() {
//   return (
//     <MuiThemeProvider theme={theme}>
//       <Root />
//     </MuiThemeProvider>
//   );
// }
import { ThemeProvider } from '@emotion/react';
import theme from 'types/theme';

// render(<App />, document.querySelector('#app'));
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />,
    </React.StrictMode>
    ,
  </ThemeProvider>,
);
//   <Provider store={store}>
//     <App />
//   </Provider>
// function App() {
//   return (
//     <MuiThemeProvider theme={theme}>
//      <App />
//     </MuiThemeProvider>
//   );
// }

// render(<App />, document.querySelector('#app'));
