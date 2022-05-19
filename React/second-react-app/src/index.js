import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormToCheckBox } from './components/checkBox';
import Parent from './components/childToParent';
import { FormReview } from './components/formReview';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Parent></Parent> */}
    {/* <FormToCheckBox></FormToCheckBox> */}
    <FormReview/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
