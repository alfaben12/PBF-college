import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

SignInForm = reduxForm({
  form: 'signIn',
  validate,
})(SignInForm);

const rootReducer = combineReducers({ form: formReducer, });

const store = createStore(rootReducer);

const renderField = ({ input, label, type, meta: {touched, error, warning} })=>(
<div>
  <div className="control">
    <label className="field">{label}</label>
    <input className="input" {...input} placeholder={label} type={type}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
</div>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
