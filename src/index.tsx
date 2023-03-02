import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// import { ThemeProvider } from '@material-ui/core/styles'
// import theme from './types/theme'
// const container = document.getElementById('root')!;
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//     <App />    
//   </ThemeProvider>,
//   </React.StrictMode>
// );
// // ReactDOM.render(
// //   <ThemeProvider theme={theme}>
// //     <App />    
// //   </ThemeProvider>,
// //   document.getElementById('root')
// // );

// // const container = document.getElementById('root')!;
// // const root = createRoot(container);

// // root.render(
// //   <React.StrictMode>
// //     <Provider store={store}>
// //       <App />
// //     </Provider>
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import App from './App';
// import App from './App';

// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    }
  }
});

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
     </MuiThemeProvider>
   
    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </React.StrictMode>
);
// function App() {
//   return (
//     <MuiThemeProvider theme={theme}>
//      <App />
//     </MuiThemeProvider>
//   );
// }
    
// render(<App />, document.querySelector('#app'));