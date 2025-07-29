import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Counter from './components/counter';
// import ConditionRender from './components/conditionalRendering';
import HandleEvents from './components/handleEvents';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <HandleEvents />
    {/* <Counter /> */}
    {/* <ConditionRender /> */}
  </React.Fragment>
  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
