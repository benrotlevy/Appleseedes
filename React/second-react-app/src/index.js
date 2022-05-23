import React from 'react';
import ReactDOM from 'react-dom/client';
import { Avatars } from './components/avatars/avatars';
import { FormToCheckBox } from './components/checkBox';
import Parent from './components/childToParent';
import { ChackNorrisJokes } from './components/chuckNorris';
import { Copy } from './components/Copy';
import { DataMassaging } from './components/data-massaging/dataMassaging';
import { Focus } from './components/focus';
import { FormReview } from './components/formReview';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Parent></Parent> */}
    {/* <FormToCheckBox></FormToCheckBox> */}
    {/* <FormReview/> */}
    {/* <ChackNorrisJokes></ChackNorrisJokes> */}
    {/* <DataMassaging /> */}
    {/* <Avatars /> */}
    {/* <Focus/> */}
    <Copy/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
