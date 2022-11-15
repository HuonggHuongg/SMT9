import React from 'react'
import { useState } from "react";
import {EMAIL_REQUIRE, EMAIL_WRONG, PASSWORD_REQUIRE, PASSWORD_WRONG} from './constant/Constants';
import {regEmail, regPass} from './constant/Constants'

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailErr, setEmailErr] = useState();
  const [passwordErr, setpasswordErr] = useState();

  const handelSubmit = (event)=>{
    const newEmailErr = !email ? EMAIL_REQUIRE : !regEmail.test(email) ? EMAIL_WRONG : ""
    const newPassErr = password === undefined ? PASSWORD_REQUIRE : password.length === 0 ? PASSWORD_REQUIRE : !regPass.test(password) ? PASSWORD_WRONG : ""
    
    setEmailErr(newEmailErr);
    setpasswordErr(newPassErr);
    if(newEmailErr === "" && newPassErr === "")
    {
      console.log("email", email);
      console.log("password", password);
    }
  }

  const printValue =(event) =>{
    event.preventDefault();
  }

  const handleChangeEmail = (event) =>{
    const newEmail = event.target.value;
    setEmail(newEmail)
  }

  const handleChangePass = (event) =>{
    const newPassword = event.target.value;
    setPassword(newPassword);
  }

    return(
      <div>
        <form onSubmit={printValue}>
          <div className="mb-3">
            <label for="exampleInputEmail1" htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeEmail} />
            <div className="error__email" style={{color: 'red' , display: emailErr? "block" : "none"}}>{emailErr}</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChangePass}/>
            <div className="error__password" style={{color: 'red' , display: passwordErr ? "block" : "none"}}>{passwordErr}</div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handelSubmit}>Login</button>
        </form>          
      </div>
    )
};


