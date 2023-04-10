import React from "react";
import App from "../src/App";
import ReactDOM from "react-dom/client";
// import emailjs from 'emailjs-com';

import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

<>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
</script>
{/* 
<script type="text/javascript">
 (function(){
 emailjs.init("YOUR_USER_ID")
 })();
</script> */}

</>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

