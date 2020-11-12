import React from "react";
import { FormI18n, FormIntl } from './components';
import "./index.css";

const App = props => {

  return (
    <div className='container'>
      <FormI18n className='fixed-container'/>
      <FormIntl className='fixed-container'/>
    </div>
  );
};

export default App;
