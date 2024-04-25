import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Users  from './Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // react-router-dom eken me yt ek enne.uRL mthk thiyagnnw.BrowserRouter, Route,Routes me thunama udin import krnn oni nthnm wed nh
<BrowserRouter>

<Routes>

  {/* path = / kynne main page ek site eke.landing pqage ek.e path ekt giym penna oni ek denna puluw elemnet kyn eken(root route ekt giym penan oni element ek denw element kyn eken)*/}
<Route path='/' element={<App/>}/>

{/* dan yt eken ek dunnt psse local host eke users kyl search klm Users.js ekt tm ynne */}
<Route path='/users' element={<Users/>}/>
</Routes>

</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
